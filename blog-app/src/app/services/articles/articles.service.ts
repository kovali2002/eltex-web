import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  public addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    const articles = [this.createArticle(draft), ...this.readArticles()];

    this.writeArticles(articles);

    return of(this.buildPage(articles, request));
  }

  public updateArticle(
    id: number,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    const articles = this.readArticles().map((article) =>
      article.id === id
        ? {
            ...article,
            title: draft.title,
            text: draft.text,
          }
        : article,
    );

    this.writeArticles(articles);

    return of(this.buildPage(articles, request));
  }

  public deleteArticle(id: number, request: ArticlesPageRequest): Observable<ArticlesPageResponse> {
    const articles = this.readArticles().filter((article) => article.id !== id);

    this.writeArticles(articles);

    return of(this.buildPage(articles, request));
  }

  private createArticle(draft: NewArticleDraft): BlogArticle {
    const createdAt = new Date();

    return {
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
  return articles.map((article) => ({ ...article }));
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
        typeof article.id === 'number' &&
        typeof article.title === 'string' &&
        typeof article.text === 'string' &&
        typeof article.dateLabel === 'string' &&
        typeof article.isoDate === 'string' &&
        typeof article.tag === 'string' &&
        isArticleTheme(article.theme) &&
        typeof article.image === 'string' &&
        typeof article.isUserCreated === 'boolean',
    )
  );
}

function isArticleTheme(value: unknown): value is ArticleTheme {
  return value === 'red' || value === 'green' || value === 'neutral';
}
