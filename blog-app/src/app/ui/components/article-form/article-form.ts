import { Component, computed, effect, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArticleFormMode, BlogCategory, NewArticleDraft } from '../../../types/article.types';

type ArticleFormControlName = 'title' | 'text' | 'categoryName';

interface MinLengthValidationInfo {
  requiredLength: number;
  actualLength: number;
}

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  public readonly isSubmitting = input(false);
  public readonly visible = input(false);
  public readonly mode = input<ArticleFormMode>('create');
  public readonly initialDraft = input<NewArticleDraft | null>(null);
  public readonly categories = input<ReadonlyArray<BlogCategory>>([]);
  public readonly submitArticle = output<NewArticleDraft>();
  public readonly cancel = output<void>();
  protected readonly formTitle = computed(() =>
    this.mode() === 'edit' ? 'Изменить статью' : 'Добавить статью',
  );
  protected readonly submitButtonLabel = computed(() => {
    if (this.isSubmitting()) {
      return this.mode() === 'edit' ? 'Сохранение...' : 'Добавление...';
    }

    return this.mode() === 'edit' ? 'Сохранить' : 'Добавить';
  });

  protected readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    categoryName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    imageFile: new FormControl<File | null>(null),
  });
  protected readonly selectedImageName = signal('');

  constructor() {
    effect(() => {
      if (this.isSubmitting()) {
        this.form.disable({ emitEvent: false });
        return;
      }

      this.form.enable({ emitEvent: false });
    });

    effect(() => {
      if (!this.visible() && !this.isSubmitting()) {
        this.resetForm();
      }
    });

    effect(() => {
      if (!this.visible()) {
        return;
      }

      const draft = this.initialDraft();

      this.form.reset({
        title: draft?.title ?? '',
        text: draft?.text ?? '',
        categoryName: draft?.categoryName ?? '',
        imageFile: null,
      });
      this.selectedImageName.set('');
    });
  }

  protected filteredCategories(): ReadonlyArray<BlogCategory> {
    const searchValue = this.form.controls.categoryName.value.trim().toLowerCase();

    if (!searchValue) {
      return this.categories();
    }

    return this.categories().filter((category) =>
      category.name.toLowerCase().includes(searchValue),
    );
  }

  protected handleImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.form.controls.imageFile.setValue(file);
    this.selectedImageName.set(file?.name ?? '');
  }

  protected hasError(controlName: ArticleFormControlName): boolean {
    const control = this.form.get(controlName);

    return Boolean(control?.invalid && control.touched);
  }

  protected getControlErrors(controlName: ArticleFormControlName): string[] {
    const control = this.form.get(controlName);
    const errors: Record<string, unknown> | null = control?.errors ?? null;

    if (!errors) {
      return [];
    }

    return Object.entries(errors).map(([errorCode, errorData]) =>
      this.getErrorStr(controlName, errorCode, errorData),
    );
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitArticle.emit({
      title: this.form.controls.title.value.trim(),
      text: this.form.controls.text.value.trim(),
      categoryName: this.form.controls.categoryName.value.trim(),
      imageFile: this.form.controls.imageFile.value,
    });
  }

  private resetForm(): void {
    this.form.reset({
      title: '',
      text: '',
      categoryName: '',
      imageFile: null,
    });
    this.selectedImageName.set('');
  }

  private getErrorStr(
    controlName: ArticleFormControlName,
    errorCode: string,
    errorData: unknown,
  ): string {
    switch (errorCode) {
      case 'required':
        if (controlName === 'title') {
          return 'Заголовок обязателен';
        }

        if (controlName === 'categoryName') {
          return 'Категория обязательна';
        }

        return 'Текст статьи обязателен';

      case 'minlength': {
        const { requiredLength, actualLength } = errorData as MinLengthValidationInfo;
        return `Нужно еще ${requiredLength - actualLength} символов`;
      }

      default:
        return 'Ошибка при заполнении поля';
    }
  }
}
