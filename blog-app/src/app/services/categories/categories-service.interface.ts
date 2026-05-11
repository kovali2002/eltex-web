import { Observable } from 'rxjs';
import { BlogCategory } from '../../types/article.types';

export interface CategoriesServiceInterface {
  getCategories(): Observable<BlogCategory[]>;
  ensureCategory(name: string): Observable<BlogCategory>;
}
