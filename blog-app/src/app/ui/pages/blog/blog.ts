import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { ArticleFormMode, BlogArticle, NewArticleDraft } from '../../../types/article.types';
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
  protected readonly userCreatedCount = computed(
    () => this.blogArticlesStore.articles().filter((article) => article.isUserCreated).length,
  );
  protected readonly showForm = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly editingArticle = signal<BlogArticle | null>(null);
  protected readonly formMode = computed<ArticleFormMode>(() =>
    this.editingArticle() === null ? 'create' : 'edit',
  );
  protected readonly formDraft = computed<NewArticleDraft | null>(() => {
    const article = this.editingArticle();

    if (article === null) {
      return null;
    }

    return {
      title: article.title,
      text: article.text,
    };
  });

  protected toggleCreateForm(): void {
    if (this.isSubmitting()) {
      return;
    }

    if (this.showForm() && this.formMode() === 'create') {
      this.closeForm();
      return;
    }

    this.editingArticle.set(null);
    this.showForm.set(true);
  }

  protected closeForm(): void {
    if (!this.isSubmitting()) {
      this.editingArticle.set(null);
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

  protected startEditing(article: BlogArticle): void {
    if (this.isSubmitting()) {
      return;
    }

    this.editingArticle.set(article);
    this.showForm.set(true);
  }

  protected submitArticle(draft: NewArticleDraft): void {
    this.isSubmitting.set(true);
    const articleId = this.editingArticle()?.id ?? null;

    globalThis.setTimeout(() => {
      if (articleId === null) {
        this.blogArticlesStore.addArticle(draft);
      } else {
        this.blogArticlesStore.updateArticle(articleId, draft);
      }

      this.isSubmitting.set(false);
      this.editingArticle.set(null);
      this.showForm.set(false);
    }, 1000);
  }

  protected deleteArticle(id: number): void {
    if (this.editingArticle()?.id === id) {
      this.closeForm();
    }

    this.blogArticlesStore.removeArticle(id);
  }
}
