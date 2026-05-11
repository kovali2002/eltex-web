import { Component, ElementRef, OnInit, ViewChild, computed, inject, signal } from '@angular/core';
import { take } from 'rxjs';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';
import { ARTICLES_SERVICE } from '../../../services/articles/articles-service.token';
import { ArticleFormMode, BlogArticle, NewArticleDraft } from '../../../types/article.types';
import { ArticleForm } from '../../components/article-form/article-form';
import { BlogArticles } from '../../components/blog-articles/blog-articles';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ArticleForm, BlogArticles],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  @ViewChild('statsDialog') private statsDialog?: ElementRef<HTMLDialogElement>;
  @ViewChild('articleFormElement', { read: ElementRef })
  private articleFormElement?: ElementRef<HTMLElement>;

  private readonly blogArticlesPageSize = 7;
  private readonly articlesService = inject(ARTICLES_SERVICE);
  private readonly articlesStore = inject(ArticlesStoreService);

  protected readonly articles = this.articlesStore.articles;
  protected readonly activePage = this.articlesStore.activePage;
  protected readonly pageSize = this.articlesStore.pageSize;
  protected readonly totalCount = this.articlesStore.totalCount;
  protected readonly userCreatedCount = this.articlesStore.userCreatedCount;
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

  public ngOnInit(): void {
    const activePage =
      this.articlesStore.pageSize() === this.blogArticlesPageSize
        ? this.articlesStore.activePage()
        : 1;

    if (this.articlesStore.hasSnapshot(activePage, this.blogArticlesPageSize)) {
      return;
    }

    this.loadArticles(activePage);
  }

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
    this.scrollToArticleForm();
  }

  protected submitArticle(draft: NewArticleDraft): void {
    this.isSubmitting.set(true);
    const articleId = this.editingArticle()?.id ?? null;

    globalThis.setTimeout(() => {
      const request = {
        page: articleId === null ? 1 : this.activePage(),
        pageSize: this.blogArticlesPageSize,
      };
      const response$ =
        articleId === null
          ? this.articlesService.addArticle(draft, request)
          : this.articlesService.updateArticle(articleId, draft, request);

      response$.pipe(take(1)).subscribe((response) => {
        this.articlesStore.savePage(response);
        this.isSubmitting.set(false);
        this.editingArticle.set(null);
        this.showForm.set(false);
      });
    }, 1000);
  }

  protected deleteArticle(id: number): void {
    if (this.editingArticle()?.id === id) {
      this.closeForm();
    }

    this.articlesService
      .deleteArticle(id, {
        page: this.activePage(),
        pageSize: this.blogArticlesPageSize,
      })
      .pipe(take(1))
      .subscribe((response) => this.articlesStore.savePage(response));
  }

  protected changePage(page: number): void {
    this.loadArticles(page);
  }

  private loadArticles(page: number): void {
    this.articlesService
      .getArticles({
        page,
        pageSize: this.blogArticlesPageSize,
      })
      .pipe(take(1))
      .subscribe((response) => this.articlesStore.savePage(response));
  }

  private scrollToArticleForm(): void {
    globalThis.setTimeout(() => {
      const firstField = this.articleFormElement?.nativeElement.querySelector<HTMLElement>(
        '#article-title, #article-text',
      );

      if (!firstField) {
        return;
      }

      firstField.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      firstField.focus({
        preventScroll: true,
      });
    }, 150);
  }
}
