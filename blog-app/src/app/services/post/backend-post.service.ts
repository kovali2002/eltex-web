import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlogArticle, BlogComment, NewCommentDraft } from '../../types/article.types';
import { PostDetails, PostServiceInterface } from './post-service.interface';

interface BackendArticle {
  id: string;
  title: string;
  content: string;
  imgSrc: string | null;
  category?: {
    id: string;
    name: string;
  } | null;
  rating: number;
  createdAt: string;
}

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
  private readonly articlesUrl = `${environment.apiBaseUrl}/articles`;
  private readonly commentsUrl = `${environment.apiBaseUrl}/comments`;

  public getPostWithComments(articleId: string): Observable<PostDetails> {
    return forkJoin({
      article: this.http.get<BackendArticle>(`${this.articlesUrl}/${articleId}`),
      comments: this.http.get<BackendComment[]>(`${this.commentsUrl}/article/${articleId}`),
    }).pipe(
      map(({ article, comments }) => ({
        article: mapArticle(article),
        comments: comments.map(mapComment),
      })),
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

function mapArticle(article: BackendArticle): BlogArticle {
  const createdAt = new Date(article.createdAt);

  return {
    id: article.id,
    title: article.title,
    text: article.content,
    dateLabel: createdAt.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    isoDate: createdAt.toISOString().slice(0, 10),
    tag: article.category?.name ?? 'New',
    theme: 'neutral',
    image: article.imgSrc ? `${environment.apiBaseUrl}${article.imgSrc}` : 'images/Selection.png',
    isUserCreated: true,
    rating: article.rating ?? 0,
  };
}

function mapComment(comment: BackendComment): BlogComment {
  const createdAt = new Date(comment.createdAt);

  return {
    id: comment.id,
    articleId: comment.articleId,
    author: comment.username,
    text: comment.content,
    dateLabel: createdAt.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    isoDate: createdAt.toISOString().slice(0, 10),
    rating: comment.rating ?? 0,
  };
}
