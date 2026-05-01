import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { INITIAL_ARTICLES } from './articles.seed';
import { BlogArticle, NewArticleDraft } from './types/article.types';

@Injectable({ providedIn: 'root' })
export class BlogArticlesStore {
  private readonly storageKey = 'kovali-blog-articles';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly articlesState = signal<BlogArticle[]>(cloneArticles(INITIAL_ARTICLES));

  public readonly articles = this.articlesState.asReadonly();
  public readonly featuredArticle = computed(() => this.articlesState()[0] ?? null);
  public readonly regularArticles = computed(() => this.articlesState().slice(1));

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.restoreFromStorage();
    }
  }

  public addArticle(draft: NewArticleDraft): void {
    const createdAt = new Date();
    const newArticle: BlogArticle = {
      id: Date.now(),
      title: draft.title,
      text: draft.text,
      dateLabel: createdAt.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      isoDate: createdAt.toISOString().slice(0, 10),
      tag: 'New',
      theme: 'neutral',
      image: 'images/Selection.png',
      isUserCreated: true,
    };

    this.articlesState.update((articles) => [newArticle, ...articles]);
    this.persist();
  }

  public updateArticle(id: number, draft: NewArticleDraft): void {
    this.articlesState.update((articles) =>
      articles.map((article) =>
        article.id === id
          ? {
              ...article,
              title: draft.title,
              text: draft.text,
            }
          : article,
      ),
    );
    this.persist();
  }

  public removeArticle(id: number): void {
    this.articlesState.update((articles) => articles.filter((article) => article.id !== id));
    this.persist();
  }

  private restoreFromStorage(): void {
    const rawValue = localStorage.getItem(this.storageKey);

    if (rawValue === null) {
      this.persist();
      return;
    }

    try {
      const parsed = JSON.parse(rawValue);

      if (isBlogArticleArray(parsed)) {
        this.articlesState.set(parsed);
        return;
      }
    } catch {
      // Ignore corrupted storage and restore the default seed below.
    }

    this.articlesState.set(cloneArticles(INITIAL_ARTICLES));
    this.persist();
  }

  private persist(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.articlesState()));
  }
}

function cloneArticles(articles: BlogArticle[]): BlogArticle[] {
  return articles.map((article) => ({ ...article }));
}

function isBlogArticleArray(value: unknown): value is BlogArticle[] {
  return (
    Array.isArray(value) &&
    value.every(
      (article) =>
        typeof article === 'object' &&
        article !== null &&
        typeof article.id === 'number' &&
        typeof article.title === 'string' &&
        typeof article.text === 'string' &&
        typeof article.dateLabel === 'string' &&
        typeof article.isoDate === 'string' &&
        typeof article.tag === 'string' &&
        typeof article.theme === 'string' &&
        typeof article.image === 'string' &&
        typeof article.isUserCreated === 'boolean',
    )
  );
}
