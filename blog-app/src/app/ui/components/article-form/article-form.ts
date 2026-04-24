import { effect } from '@angular/core';
import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleFormMode, NewArticleDraft } from '../../../types/article.types';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  public readonly isSubmitting = input(false);
  public readonly visible = input(false);
  public readonly mode = input<ArticleFormMode>('create');
  public readonly initialDraft = input<NewArticleDraft | null>(null);
  public readonly submitArticle = output<NewArticleDraft>();
  public readonly cancel = output<void>();

  protected readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(25)],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  protected readonly titleControl = this.form.controls.title;
  protected readonly textControl = this.form.controls.text;

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
      });
    });
  }

  protected get formTitle(): string {
    return this.mode() === 'edit' ? 'Изменить статью' : 'Добавить статью';
  }

  protected get submitButtonLabel(): string {
    if (this.isSubmitting()) {
      return this.mode() === 'edit' ? 'Сохранение...' : 'Добавление...';
    }

    return this.mode() === 'edit' ? 'Сохранить' : 'Добавить';
  }

  protected isFieldInvalid(control: FormControl<string>): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  protected getTitleError(): string {
    if (!this.isFieldInvalid(this.titleControl)) {
      return '';
    }

    if (this.titleControl.hasError('required')) {
      return 'Укажите название статьи.';
    }

    if (this.titleControl.hasError('minlength')) {
      return 'Минимальная длина названия статьи — 25 символов.';
    }

    return '';
  }

  protected getTextError(): string {
    if (!this.isFieldInvalid(this.textControl)) {
      return '';
    }

    if (this.textControl.hasError('required')) {
      return 'Укажите текст статьи.';
    }

    return '';
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitArticle.emit({
      title: this.form.controls.title.value.trim(),
      text: this.form.controls.text.value.trim(),
    });
  }

  private resetForm(): void {
    this.form.reset({
      title: '',
      text: '',
    });
  }
}
