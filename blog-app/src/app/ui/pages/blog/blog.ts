import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { NewArticleDraft } from '../../../types/article.types';
import { BlogArticlesStore } from '../../../blog-articles.store';
import { ArticleForm } from '../../components/article-form/article-form';
import { BlogArticles } from '../../components/blog-articles/blog-articles';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ArticleForm, BlogArticles],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  @ViewChild('statsDialog') private statsDialog?: ElementRef<HTMLDialogElement>;

  private readonly blogArticlesStore = inject(BlogArticlesStore);

  protected readonly featuredArticle = this.blogArticlesStore.featuredArticle;
  protected readonly regularArticles = this.blogArticlesStore.regularArticles;
  protected readonly totalCount = computed(() => this.blogArticlesStore.articles().length);
  protected readonly showForm = signal(false);
  protected readonly isSubmitting = signal(false);

  protected toggleForm(): void {
    this.showForm.update((value) => !value);
  }

  protected closeForm(): void {
    if (!this.isSubmitting()) {
      this.showForm.set(false);
    }
  }

  protected toggleStats(): void {
    const dialog = this.statsDialog?.nativeElement;

    if (!dialog) {
      return;
    }

    if (dialog.open) {
      dialog.close();
      return;
    }

    dialog.showModal();
  }

  protected closeStats(): void {
    this.statsDialog?.nativeElement.close();
  }

  protected handleDialogClick(event: MouseEvent): void {
    if (event.target === this.statsDialog?.nativeElement) {
      this.closeStats();
    }
  }

  protected addArticle(draft: NewArticleDraft): void {
    this.isSubmitting.set(true);

    globalThis.setTimeout(() => {
      this.blogArticlesStore.addArticle(draft);
      this.isSubmitting.set(false);
      this.showForm.set(false);
    }, 1000);
  }

  protected deleteArticle(id: number): void {
    this.blogArticlesStore.removeArticle(id);
  }
}
