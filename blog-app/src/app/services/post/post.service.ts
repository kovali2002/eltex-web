import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INITIAL_ARTICLES } from '../../articles.seed';
import { ArticleTheme, BlogArticle, BlogComment, NewCommentDraft } from '../../types/article.types';
import { PostDetails, PostServiceInterface } from './post-service.interface';

@Injectable({ providedIn: 'root' })
export class PostService implements PostServiceInterface {
  private readonly articlesStorageKey = 'kovali-blog-articles';
  private readonly commentsStorageKey = 'kovali-blog-comments';
  private readonly platformId = inject(PLATFORM_ID);

  public getPostWithComments(articleId: number): Observable<PostDetails> {
    return of(this.buildPostDetails(articleId));
  }

  public addComment(articleId: number, draft: NewCommentDraft): Observable<PostDetails> {
    const comments = [
      this.createComment(articleId, draft),
      ...this.readComments().filter((comment) => comment.articleId === articleId),
    ];
    const otherComments = this.readComments().filter((comment) => comment.articleId !== articleId);

    this.writeComments([...comments, ...otherComments]);

    return of(this.buildPostDetails(articleId));
  }

  public changeCommentRating(
    articleId: number,
    commentId: number,
    rating: number,
  ): Observable<PostDetails> {
    const comments = this.readComments().map((comment) =>
      comment.id === commentId && comment.articleId === articleId
        ? {
            ...comment,
            rating: clampRating(rating),
          }
        : comment,
    );

    this.writeComments(comments);

    return of(this.buildPostDetails(articleId));
  }

  public changeArticleRating(articleId: number, rating: number): Observable<PostDetails> {
    const articles = this.readArticles().map((article) =>
      article.id === articleId
        ? {
            ...article,
            rating: clampRating(rating),
          }
        : article,
    );

    this.writeArticles(articles);

    return of(this.buildPostDetails(articleId));
  }

  private buildPostDetails(articleId: number): PostDetails {
    const article = this.readArticles().find((item) => item.id === articleId) ?? null;
    const comments = this.readComments().filter((comment) => comment.articleId === articleId);

    return {
      article: article ? { ...article } : null,
      comments: cloneComments(comments),
    };
  }

  private createComment(articleId: number, draft: NewCommentDraft): BlogComment {
    const createdAt = new Date();

    return {
      id: Date.now(),
      articleId,
      author: draft.author,
      text: draft.text,
      dateLabel: createdAt.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      isoDate: createdAt.toISOString().slice(0, 10),
      rating: 0,
    };
  }

  private readArticles(): BlogArticle[] {
    if (!isPlatformBrowser(this.platformId)) {
      return cloneArticles(INITIAL_ARTICLES);
    }

    const rawValue = localStorage.getItem(this.articlesStorageKey);

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
      // Invalid localStorage data is replaced with the default seed.
    }

    const initialArticles = cloneArticles(INITIAL_ARTICLES);
    this.writeArticles(initialArticles);

    return initialArticles;
  }

  private writeArticles(articles: ReadonlyArray<BlogArticle>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.articlesStorageKey, JSON.stringify(articles));
  }

  private readComments(): BlogComment[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const rawValue = localStorage.getItem(this.commentsStorageKey);

    if (rawValue === null) {
      return [];
    }

    try {
      const parsed = JSON.parse(rawValue);

      if (isBlogCommentArray(parsed)) {
        return cloneComments(parsed);
      }
    } catch {
      // Invalid comment storage is reset below.
    }

    this.writeComments([]);

    return [];
  }

  private writeComments(comments: ReadonlyArray<BlogComment>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.commentsStorageKey, JSON.stringify(comments));
  }
}

function cloneArticles(articles: ReadonlyArray<BlogArticle>): BlogArticle[] {
  return articles.map((article) => ({ ...article, rating: article.rating ?? 0 }));
}

function cloneComments(comments: ReadonlyArray<BlogComment>): BlogComment[] {
  return comments.map((comment) => ({ ...comment }));
}

function clampRating(rating: number): number {
  return Math.min(Math.max(Math.round(rating), 0), 5);
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
        typeof article.isUserCreated === 'boolean' &&
        (typeof article.rating === 'number' || article.rating === undefined),
    )
  );
}

function isArticleTheme(value: unknown): value is ArticleTheme {
  return value === 'red' || value === 'green' || value === 'neutral';
}

function isBlogCommentArray(value: unknown): value is BlogComment[] {
  return (
    Array.isArray(value) &&
    value.every(
      (comment) =>
        typeof comment === 'object' &&
        comment !== null &&
        typeof comment.id === 'number' &&
        typeof comment.articleId === 'number' &&
        typeof comment.author === 'string' &&
        typeof comment.text === 'string' &&
        typeof comment.dateLabel === 'string' &&
        typeof comment.isoDate === 'string' &&
        typeof comment.rating === 'number',
    )
  );
}
