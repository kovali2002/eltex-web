import { InjectionToken, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BackendCategoriesService } from './backend-categories.service';
import { CategoriesServiceInterface } from './categories-service.interface';
import { LocalStorageCategoriesService } from './local-storage-categories.service';

export const CATEGORIES_SERVICE = new InjectionToken<CategoriesServiceInterface>(
  'CATEGORIES_SERVICE',
  {
    providedIn: 'root',
    factory: () =>
      environment.useBackend
        ? inject(BackendCategoriesService)
        : inject(LocalStorageCategoriesService),
  },
);
