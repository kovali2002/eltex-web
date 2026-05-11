import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CATEGORIES_SERVICE } from '../categories/categories-service.token';
import { BlogArticle, NewArticleDraft } from '../../types/article.types';
import {
  ArticlesPageRequest,
  ArticlesPageResponse,
  ArticlesServiceInterface,
} from './articles-service.interface';

interface BackendArticle {
  id: string;
  title: string;
  content: string;
  imgSrc: string | null;
  categoryId: string | null;
  category?: {
    id: string;
    name: string;
  } | null;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

interface BackendArticlesResponse {
  items: BackendArticle[];
  total: number;
  page: number;
  limit: number;
}

@Injectable({ providedIn: 'root' })
export class BackendArticlesService implements ArticlesServiceInterface {
  private readonly http = inject(HttpClient);
  private readonly categoriesService = inject(CATEGORIES_SERVICE);
  private readonly baseUrl = `${environment.apiBaseUrl}/articles`;

  public getArticles(request: ArticlesPageRequest): Observable<ArticlesPageResponse> {
    const params = new HttpParams()
      .set('page', request.page)
      .set('limit', request.pageSize)
      .set('cumulative', false);

    return this.http.get<BackendArticlesResponse>(this.baseUrl, { params }).pipe(
      map((response) => ({
        articles: response.items.map(mapArticle),
        totalCount: response.total,
        userCreatedCount: response.total,
        page: response.page,
        pageSize: response.limit,
      })),
    );
  }

  public getArticle(id: string): Observable<BlogArticle | null> {
    return this.http.get<BackendArticle>(`${this.baseUrl}/${id}`).pipe(map(mapArticle));
  }

  public addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return this.categoriesService.ensureCategory(draft.categoryName).pipe(
      switchMap((category) =>
        this.http.post<BackendArticle>(this.baseUrl, buildArticleFormData(draft, category.id)),
      ),
      switchMap(() => this.getArticles(request)),
    );
  }

  public updateArticle(
    id: string,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return this.categoriesService.ensureCategory(draft.categoryName).pipe(
      switchMap((category) =>
        this.http.patch<BackendArticle>(
          `${this.baseUrl}/${id}`,
          buildArticleFormData(draft, category.id),
        ),
      ),
      switchMap(() => this.getArticles(request)),
    );
  }

  public deleteArticle(id: string, request: ArticlesPageRequest): Observable<ArticlesPageResponse> {
    return this.http
      .delete<BackendArticle>(`${this.baseUrl}/${id}`)
      .pipe(switchMap(() => this.getArticles(request)));
  }
}

function buildArticleFormData(draft: NewArticleDraft, categoryId: string): FormData {
  const formData = new FormData();

  formData.append('title', draft.title);
  formData.append('content', draft.text);
  formData.append('categoryId', categoryId);

  if (draft.imageFile) {
    formData.append('image', draft.imageFile);
  }

  return formData;
}

function mapArticle(article: BackendArticle): BlogArticle {
  const createdAt = new Date(article.createdAt);
  const isoDate = Number.isNaN(createdAt.getTime())
    ? new Date().toISOString().slice(0, 10)
    : createdAt.toISOString().slice(0, 10);

  return {
    id: article.id,
    title: article.title,
    text: article.content,
    dateLabel: Number.isNaN(createdAt.getTime())
      ? ''
      : createdAt.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
    isoDate,
    tag: article.category?.name ?? 'New',
    theme: 'neutral',
    image: article.imgSrc ? `${environment.apiBaseUrl}${article.imgSrc}` : 'images/Selection.png',
    isUserCreated: true,
    rating: article.rating ?? 0,
  };
}
