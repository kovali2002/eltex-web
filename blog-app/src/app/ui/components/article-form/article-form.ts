import { effect } from '@angular/core';
import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewArticleDraft } from '../../../types/article.types';

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
  public readonly submitArticle = output<NewArticleDraft>();
  public readonly cancel = output<void>();

  protected readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  constructor() {
    effect(() => {
      if (!this.visible() && !this.isSubmitting()) {
        this.form.reset({
          title: '',
          text: '',
        });
      }
    });
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
}
