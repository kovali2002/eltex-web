import { effect } from '@angular/core';
import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewArticleDraft } from '../../../article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  readonly isSubmitting = input(false);
  readonly visible = input(false);
  readonly submitArticle = output<NewArticleDraft>();
  readonly cancel = output<void>();

  readonly form = new FormGroup({
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

  submit(): void {
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
