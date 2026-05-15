import { Observable } from 'rxjs';
import { BlogArticle, NewArticleDraft } from '../../types/article.types';

export interface ArticlesPageRequest {
  page: number;
  pageSize: number;
}

export interface ArticlesPageResponse {
  articles: BlogArticle[];
  totalCount: number;
  userCreatedCount: number;
  page: number;
  pageSize: number;
}

export interface ArticlesServiceInterface {
  getArticles(request: ArticlesPageRequest): Observable<ArticlesPageResponse>;
  getArticle(id: string): Observable<BlogArticle | null>;
  addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse>;
  updateArticle(
    id: string,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse>;
  deleteArticle(id: string, request: ArticlesPageRequest): Observable<ArticlesPageResponse>;
}
