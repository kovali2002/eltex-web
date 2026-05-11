import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlogCategory } from '../../types/article.types';
import { CategoriesServiceInterface } from './categories-service.interface';

interface BackendCategory {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class BackendCategoriesService implements CategoriesServiceInterface {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/categories`;

  public getCategories(): Observable<BlogCategory[]> {
    return this.http
      .get<BackendCategory[]>(this.baseUrl)
      .pipe(map((categories) => categories.map(mapCategory)));
  }

  public ensureCategory(name: string): Observable<BlogCategory> {
    const normalizedName = name.trim();

    return this.getCategories().pipe(
      switchMap((categories) => {
        const existingCategory = categories.find(
          (category) => category.name.toLowerCase() === normalizedName.toLowerCase(),
        );

        if (existingCategory) {
          return of(existingCategory);
        }

        return this.http
          .post<BackendCategory>(this.baseUrl, { name: normalizedName })
          .pipe(map(mapCategory));
      }),
    );
  }
}

function mapCategory(category: BackendCategory): BlogCategory {
  return {
    id: category.id,
    name: category.name,
  };
}
