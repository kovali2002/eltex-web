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
  addArticle(
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse>;
  updateArticle(
    id: number,
    draft: NewArticleDraft,
    request: ArticlesPageRequest,
  ): Observable<ArticlesPageResponse>;
  deleteArticle(id: number, request: ArticlesPageRequest): Observable<ArticlesPageResponse>;
}
