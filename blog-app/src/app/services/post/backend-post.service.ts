import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlogComment, NewCommentDraft } from '../../types/article.types';
import { CATEGORIES_SERVICE } from '../categories/categories-service.token';
import {
  BackendArticle,
  buildCategoryLookup,
  mapBackendArticle,
} from '../articles/backend-article.mapper';
import { PostDetails, PostServiceInterface } from './post-service.interface';

interface BackendComment {
  id: string;
  articleId: string;
  username: string;
  content: string;
  rating: number;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class BackendPostService implements PostServiceInterface {
  private readonly http = inject(HttpClient);
  private readonly categoriesService = inject(CATEGORIES_SERVICE);
  private readonly articlesUrl = `${environment.apiBaseUrl}/articles`;
  private readonly commentsUrl = `${environment.apiBaseUrl}/comments`;

  public getPostWithComments(articleId: string): Observable<PostDetails> {
    return forkJoin({
      article: this.http
        .get<BackendArticle>(`${this.articlesUrl}/${articleId}`)
        .pipe(catchError(() => of(null))),
      comments: this.http
        .get<BackendComment[]>(`${this.commentsUrl}/article/${articleId}`)
        .pipe(catchError(() => of([]))),
      categories: this.categoriesService.getCategories(),
    }).pipe(
      map(({ article, comments, categories }) => {
        const categoryLookup = buildCategoryLookup(categories);

        return {
          article: article ? mapBackendArticle(article, categoryLookup) : null,
          comments: comments.map(mapComment),
        };
      }),
    );
  }

  public addComment(articleId: string, draft: NewCommentDraft): Observable<PostDetails> {
    return this.http
      .post<BackendComment>(this.commentsUrl, {
        username: draft.author,
        content: draft.text,
        articleId,
      })
      .pipe(switchMap(() => this.getPostWithComments(articleId)));
  }

  public changeCommentRating(
    articleId: string,
    commentId: string,
    rating: number,
  ): Observable<PostDetails> {
    return this.http
      .patch<BackendComment>(`${this.commentsUrl}/${commentId}/rating`, { rating })
      .pipe(switchMap(() => this.getPostWithComments(articleId)));
  }

  public changeArticleRating(articleId: string, rating: number): Observable<PostDetails> {
    return this.http.get<BackendArticle>(`${this.articlesUrl}/${articleId}`).pipe(
      switchMap((article) => {
        const action = rating > article.rating ? 'rating-up' : 'rating-down';

        return this.http.patch<BackendArticle>(`${this.articlesUrl}/${articleId}/${action}`, {});
      }),
      switchMap(() => this.getPostWithComments(articleId)),
    );
  }
}

function mapComment(comment: BackendComment): BlogComment {
  const createdAt = new Date(comment.createdAt);
  const hasValidDate = !Number.isNaN(createdAt.getTime());

  return {
    id: comment.id,
    articleId: comment.articleId,
    author: comment.username,
    text: comment.content,
    dateLabel: hasValidDate
      ? createdAt.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '',
    isoDate: hasValidDate
      ? createdAt.toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    rating: comment.rating ?? 0,
  };
}
