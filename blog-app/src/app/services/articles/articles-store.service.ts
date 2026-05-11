import { Injectable, signal } from '@angular/core';
import { BlogArticle } from '../../types/article.types';
import { ArticlesPageResponse } from './articles-service.interface';

@Injectable({ providedIn: 'root' })
export class ArticlesStoreService {
  private readonly articlesState = signal<ReadonlyArray<BlogArticle>>([]);
  private readonly activePageState = signal(1);
  private readonly pageSizeState = signal(7);
  private readonly totalCountState = signal(0);
  private readonly userCreatedCountState = signal(0);
  private readonly hasLoadedState = signal(false);

  public readonly articles = this.articlesState.asReadonly();
  public readonly activePage = this.activePageState.asReadonly();
  public readonly pageSize = this.pageSizeState.asReadonly();
  public readonly totalCount = this.totalCountState.asReadonly();
  public readonly userCreatedCount = this.userCreatedCountState.asReadonly();
  public readonly hasLoaded = this.hasLoadedState.asReadonly();

  public saveArticles(articles: ReadonlyArray<BlogArticle>): void {
    this.articlesState.set(articles.map((article) => ({ ...article })));
    this.hasLoadedState.set(true);
  }

  public savePaginationState(activePage: number, pageSize = this.pageSizeState()): void {
    this.activePageState.set(activePage);
    this.pageSizeState.set(pageSize);
  }

  public saveTotalCount(totalCount: number): void {
    this.totalCountState.set(totalCount);
  }

  public saveUserCreatedCount(userCreatedCount: number): void {
    this.userCreatedCountState.set(userCreatedCount);
  }

  public savePage(response: ArticlesPageResponse): void {
    this.saveArticles(response.articles);
    this.savePaginationState(response.page, response.pageSize);
    this.saveTotalCount(response.totalCount);
    this.saveUserCreatedCount(response.userCreatedCount);
  }

  public hasSnapshot(activePage: number, pageSize: number): boolean {
    return this.hasLoaded() && this.activePage() === activePage && this.pageSize() === pageSize;
  }
}
