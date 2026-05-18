import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlogArticle, NewArticleDraft } from '../../types/article.types';
import { CATEGORIES_SERVICE } from '../categories/categories-service.token';
import { BackendArticle, buildCategoryLookup, mapBackendArticle } from './backend-article.mapper';
import {
  ArticlesPageRequest,
  ArticlesPageResponse,
  ArticlesServiceInterface,
} from './articles-service.interface';

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

    return forkJoin({
      response: this.http.get<BackendArticlesResponse>(this.baseUrl, { params }),
      categories: this.categoriesService.getCategories(),
    }).pipe(
      map(({ response, categories }) => {
        const categoryLookup = buildCategoryLookup(categories);

        return {
          articles: response.items.map((article) => mapBackendArticle(article, categoryLookup)),
          totalCount: response.total,
          userCreatedCount: response.total,
          page: response.page,
          pageSize: response.limit,
        };
      }),
    );
  }

  public getArticle(id: string): Observable<BlogArticle | null> {
    return forkJoin({
      article: this.http
        .get<BackendArticle>(`${this.baseUrl}/${id}`)
        .pipe(catchError(() => of(null))),
      categories: this.categoriesService.getCategories(),
    }).pipe(
      map(({ article, categories }) =>
        article ? mapBackendArticle(article, buildCategoryLookup(categories)) : null,
      ),
    );
  }

  public addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return this.resolveCategoryId(draft).pipe(
      switchMap((categoryId) =>
        this.http.post<BackendArticle>(this.baseUrl, buildArticleFormData(draft, categoryId)),
      ),
      switchMap(() => this.getArticles(request)),
    );
  }

  public updateArticle(
    id: string,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse> {
    return this.resolveCategoryId(draft).pipe(
      switchMap((categoryId) =>
        this.http.patch<BackendArticle>(
          `${this.baseUrl}/${id}`,
          buildArticleFormData(draft, categoryId),
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

  private resolveCategoryId(draft: NewArticleDraft): Observable<string> {
    const categoryId = draft.categoryId?.trim();

    if (categoryId) {
      return of(categoryId);
    }

    return this.categoriesService
      .ensureCategory(draft.categoryName)
      .pipe(map((category) => category.id));
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
