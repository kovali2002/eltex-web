import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ArticlesServiceInterface } from './articles-service.interface';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesServiceInterface;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return paginated articles and total count', async () => {
    const response = await firstValueFrom(service.getArticles({ page: 1, pageSize: 3 }));

    expect(response.articles.length).toBe(3);
    expect(response.totalCount).toBe(7);
    expect(response.page).toBe(1);
    expect(response.pageSize).toBe(3);
  });

  it('should update article title and text', async () => {
    const initialResponse = await firstValueFrom(service.getArticles({ page: 1, pageSize: 7 }));
    const article = initialResponse.articles[0];

    const updatedResponse = await firstValueFrom(
      service.updateArticle(
        article.id,
        {
          title: 'Обновленный заголовок статьи для проверки сохранения',
          text: 'Обновленный текст статьи',
          categoryName: 'Проверка',
          imageFile: null,
        },
        { page: 1, pageSize: 7 },
      ),
    );
    const updatedArticle = updatedResponse.articles[0];

    expect(updatedArticle.title).toBe('Обновленный заголовок статьи для проверки сохранения');
    expect(updatedArticle.text).toBe('Обновленный текст статьи');
    expect(updatedArticle.id).toBe(article.id);
    expect(updatedArticle.dateLabel).toBe(article.dateLabel);
  });
});
