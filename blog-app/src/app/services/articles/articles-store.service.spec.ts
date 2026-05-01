import { TestBed } from '@angular/core/testing';
import { INITIAL_ARTICLES } from '../../articles.seed';
import { ArticlesStoreService } from './articles-store.service';

describe('ArticlesStoreService', () => {
  let store: ArticlesStoreService;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    store = TestBed.inject(ArticlesStoreService);
  });

  it('should save articles and pagination state', () => {
    store.savePage({
      articles: [INITIAL_ARTICLES[0]],
      totalCount: 7,
      userCreatedCount: 0,
      page: 2,
      pageSize: 1,
    });

    expect(store.articles()).toEqual([INITIAL_ARTICLES[0]]);
    expect(store.activePage()).toBe(2);
    expect(store.pageSize()).toBe(1);
    expect(store.totalCount()).toBe(7);
    expect(store.userCreatedCount()).toBe(0);
    expect(store.hasSnapshot(2, 1)).toBe(true);
  });
});
