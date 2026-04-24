import { TestBed } from '@angular/core/testing';
import { BlogArticlesStore } from './blog-articles.store';

describe('BlogArticlesStore', () => {
  let store: BlogArticlesStore;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(BlogArticlesStore);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should update article title and text', () => {
    const article = store.articles()[0];

    store.updateArticle(article.id, {
      title: 'Обновленный заголовок статьи для проверки сохранения',
      text: 'Обновленный текст статьи',
    });

    const updatedArticle = store.articles()[0];

    expect(updatedArticle.title).toBe('Обновленный заголовок статьи для проверки сохранения');
    expect(updatedArticle.text).toBe('Обновленный текст статьи');
    expect(updatedArticle.id).toBe(article.id);
    expect(updatedArticle.dateLabel).toBe(article.dateLabel);
  });
});
