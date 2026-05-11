import { InjectionToken, inject } from '@angular/core';
import { ArticlesService } from './articles.service';
import { ArticlesServiceInterface } from './articles-service.interface';

export const ARTICLES_SERVICE = new InjectionToken<ArticlesServiceInterface>('ARTICLES_SERVICE', {
  providedIn: 'root',
  factory: () => inject(ArticlesService),
});
