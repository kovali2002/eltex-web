import { InjectionToken, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArticlesService } from './articles.service';
import { ArticlesServiceInterface } from './articles-service.interface';
import { BackendArticlesService } from './backend-articles.service';

export const ARTICLES_SERVICE = new InjectionToken<ArticlesServiceInterface>('ARTICLES_SERVICE', {
  providedIn: 'root',
  factory: () =>
    environment.useBackend ? inject(BackendArticlesService) : inject(ArticlesService),
});
