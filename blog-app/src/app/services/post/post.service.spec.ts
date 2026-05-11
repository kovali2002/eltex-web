import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { POST_SERVICE } from './post-service.token';
import { PostServiceInterface } from './post-service.interface';

describe('PostService', () => {
  let service: PostServiceInterface;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    service = TestBed.inject(POST_SERVICE);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return post with comments', async () => {
    const details = await firstValueFrom(service.getPostWithComments(1));

    expect(details.article?.id).toBe(1);
    expect(details.comments).toEqual([]);
  });

  it('should add comment and change ratings', async () => {
    await firstValueFrom(
      service.addComment(1, {
        author: 'Григорий',
        text: 'Полезная статья',
      }),
    );

    const details = await firstValueFrom(service.getPostWithComments(1));
    const comment = details.comments[0];

    expect(comment.author).toBe('Григорий');
    expect(comment.text).toBe('Полезная статья');

    const withCommentRating = await firstValueFrom(service.changeCommentRating(1, comment.id, 4));

    expect(withCommentRating.comments[0].rating).toBe(4);

    const withArticleRating = await firstValueFrom(service.changeArticleRating(1, 5));

    expect(withArticleRating.article?.rating).toBe(5);
  });
});
