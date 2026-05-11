import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INITIAL_ARTICLES } from '../../articles.seed';
import { BlogCategory } from '../../types/article.types';
import { CategoriesServiceInterface } from './categories-service.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageCategoriesService implements CategoriesServiceInterface {
  private readonly storageKey = 'kovali-blog-categories';
  private readonly platformId = inject(PLATFORM_ID);

  public getCategories(): Observable<BlogCategory[]> {
    return of(this.readCategories());
  }

  public ensureCategory(name: string): Observable<BlogCategory> {
    const normalizedName = name.trim();
    const categories = this.readCategories();
    const existingCategory = categories.find(
      (category) => category.name.toLowerCase() === normalizedName.toLowerCase(),
    );

    if (existingCategory) {
      return of(existingCategory);
    }

    const category: BlogCategory = {
      id: String(Date.now()),
      name: normalizedName,
    };

    this.writeCategories([...categories, category]);

    return of(category);
  }

  private readCategories(): BlogCategory[] {
    if (!isPlatformBrowser(this.platformId)) {
      return getSeedCategories();
    }

    const rawValue = localStorage.getItem(this.storageKey);

    if (rawValue === null) {
      const categories = getSeedCategories();
      this.writeCategories(categories);

      return categories;
    }

    try {
      const parsed = JSON.parse(rawValue);

      if (isCategoryArray(parsed)) {
        return parsed;
      }
    } catch {
      // Invalid category storage is replaced with seed values below.
    }

    const categories = getSeedCategories();
    this.writeCategories(categories);

    return categories;
  }

  private writeCategories(categories: ReadonlyArray<BlogCategory>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(categories));
  }
}

function getSeedCategories(): BlogCategory[] {
  return Array.from(new Set(INITIAL_ARTICLES.map((article) => article.tag))).map((name, index) => ({
    id: String(index + 1),
    name,
  }));
}

function isCategoryArray(value: unknown): value is BlogCategory[] {
  return (
    Array.isArray(value) &&
    value.every(
      (category) =>
        typeof category === 'object' &&
        category !== null &&
        typeof category.id === 'string' &&
        typeof category.name === 'string',
    )
  );
}
