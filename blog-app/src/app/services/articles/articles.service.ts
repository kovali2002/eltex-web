import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';
import { INITIAL_ARTICLES } from '../../articles.seed';
import { ArticleTheme, BlogArticle, NewArticleDraft } from '../../types/article.types';
import {
  ArticlesPageRequest,
  ArticlesPageResponse,
  ArticlesServiceInterface,
} from './articles-service.interface';

@Injectable({ providedIn: 'root' })
export class ArticlesService implements ArticlesServiceInterface {
  private readonly storageKey = 'kovali-blog-articles';
  private readonly platformId = inject(PLATFORM_ID);

  public getArticles(request: ArticlesPageRequest): Observable<ArticlesPageResponse> {
    return of(this.buildPage(this.readArticles(), request));
  }

  public getArticle(id: string): Observable<BlogArticle | null> {
    return of(this.readArticles().find((article) => article.id === id) ?? null);
  }

  public addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return from(this.createArticle(draft)).pipe(
      map((article) => {
        const articles = [article, ...this.readArticles()];

        this.writeArticles(articles);

        return this.buildPage(articles, request);
      }),
    );
  }

  public updateArticle(
    id: string,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return from(resolveLocalImage(draft.imageFile)).pipe(
      map((image) => {
        const articles = this.readArticles().map((article) =>
          article.id === id
            ? {
                ...article,
                title: draft.title,
                text: draft.text,
                tag: draft.categoryName,
                image: image ?? article.image,
              }
            : article,
        );

        this.writeArticles(articles);

        return this.buildPage(articles, request);
      }),
    );
  }

  public deleteArticle(id: string, request: ArticlesPageRequest): Observable<ArticlesPageResponse> {
    const articles = this.readArticles().filter((article) => article.id !== id);

    this.writeArticles(articles);

    return of(this.buildPage(articles, request));
  }

  private createArticle(draft: NewArticleDraft): Promise<BlogArticle> {
    const createdAt = new Date();

    return resolveLocalImage(draft.imageFile).then((image) => ({
      id: String(Date.now()),
      title: draft.title,
      text: draft.text,
      dateLabel: createdAt.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      isoDate: createdAt.toISOString().slice(0, 10),
      tag: draft.categoryName,
      theme: 'neutral',
      image: image ?? 'images/Selection.png',
      isUserCreated: true,
      rating: 0,
    }));
  }

  private readArticles(): BlogArticle[] {
    if (!isPlatformBrowser(this.platformId)) {
      return cloneArticles(INITIAL_ARTICLES);
    }

    const rawValue = localStorage.getItem(this.storageKey);

    if (rawValue === null) {
      const initialArticles = cloneArticles(INITIAL_ARTICLES);
      this.writeArticles(initialArticles);

      return initialArticles;
    }

    try {
      const parsed = JSON.parse(rawValue);

      if (isBlogArticleArray(parsed)) {
        return cloneArticles(parsed);
      }
    } catch {
      // Corrupted storage is replaced with the default seed below.
    }

    const initialArticles = cloneArticles(INITIAL_ARTICLES);
    this.writeArticles(initialArticles);

    return initialArticles;
  }

  private writeArticles(articles: ReadonlyArray<BlogArticle>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(articles));
  }

  private buildPage(
    articles: ReadonlyArray<BlogArticle>,
    request: ArticlesPageRequest,
  ): ArticlesPageResponse {
    const pageSize = Math.max(1, Math.floor(request.pageSize));
    const totalCount = articles.length;
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
    const page = totalCount === 0 ? 1 : clamp(Math.floor(request.page), 1, totalPages);
    const startIndex = (page - 1) * pageSize;

    return {
      articles: cloneArticles(articles.slice(startIndex, startIndex + pageSize)),
      totalCount,
      userCreatedCount: articles.filter((article) => article.isUserCreated).length,
      page,
      pageSize,
    };
  }
}

function cloneArticles(articles: ReadonlyArray<BlogArticle>): BlogArticle[] {
  return articles.map((article) => ({
    ...article,
    id: String(article.id),
    rating: article.rating ?? 0,
  }));
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function isBlogArticleArray(value: unknown): value is BlogArticle[] {
  return (
    Array.isArray(value) &&
    value.every(
      (article) =>
        typeof article === 'object' &&
        article !== null &&
        (typeof article.id === 'string' || typeof article.id === 'number') &&
        typeof article.title === 'string' &&
        typeof article.text === 'string' &&
        typeof article.dateLabel === 'string' &&
        typeof article.isoDate === 'string' &&
        typeof article.tag === 'string' &&
        isArticleTheme(article.theme) &&
        typeof article.image === 'string' &&
        typeof article.isUserCreated === 'boolean' &&
        (typeof article.rating === 'number' || article.rating === undefined),
    )
  );
}

function resolveLocalImage(file: File | null): Promise<string | null> {
  if (!file) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => resolve(String(reader.result)));
    reader.addEventListener('error', () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function isArticleTheme(value: unknown): value is ArticleTheme {
  return value === 'red' || value === 'green' || value === 'neutral';
}
