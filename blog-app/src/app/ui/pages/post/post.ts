import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { POST_SERVICE } from '../../../services/post/post-service.token';
import { PostStoreService } from '../../../services/post/post-store.service';
import { BlogComment, NewCommentDraft } from '../../../types/article.types';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly title = inject(Title);
  private readonly postService = inject(POST_SERVICE);
  private readonly postStore = inject(PostStoreService);

  protected readonly article = this.postStore.article;
  protected readonly comments = this.postStore.comments;
  protected readonly isLoaded = signal(false);
  protected readonly pageTitle = computed(() => this.article()?.title ?? 'Пост не найден');
  protected readonly commentForm = new FormGroup({
    author: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  public ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const articleId = Number(params.get('id'));

      if (!Number.isFinite(articleId)) {
        this.postStore.savePostDetails({ article: null, comments: [] });
        this.title.setTitle('Пост не найден | Kovali-folio');
        this.isLoaded.set(true);
        return;
      }

      this.loadPost(articleId);
    });
  }

  protected addComment(articleId: number): void {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const draft: NewCommentDraft = {
      author: this.commentForm.controls.author.value.trim(),
      text: this.commentForm.controls.text.value.trim(),
    };

    this.postService
      .addComment(articleId, draft)
      .pipe(take(1))
      .subscribe((details) => {
        this.postStore.savePostDetails(details);
        this.commentForm.reset();
      });
  }

  protected changeArticleRating(articleId: number, rating: number): void {
    this.postService
      .changeArticleRating(articleId, rating)
      .pipe(take(1))
      .subscribe((details) => this.postStore.savePostDetails(details));
  }

  protected changeCommentRating(comment: BlogComment, rating: number): void {
    this.postService
      .changeCommentRating(comment.articleId, comment.id, rating)
      .pipe(take(1))
      .subscribe((details) => this.postStore.savePostDetails(details));
  }

  protected hasError(controlName: 'author' | 'text'): boolean {
    const control = this.commentForm.get(controlName);

    return Boolean(control?.invalid && control.touched);
  }

  private loadPost(articleId: number): void {
    this.isLoaded.set(false);
    this.postService
      .getPostWithComments(articleId)
      .pipe(take(1))
      .subscribe((details) => {
        this.postStore.savePostDetails(details);
        this.title.setTitle(`${details.article?.title ?? 'Пост не найден'} | Kovali-folio`);
        this.isLoaded.set(true);
      });
  }
}
