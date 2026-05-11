import { Injectable, signal } from '@angular/core';
import { BlogArticle, BlogComment } from '../../types/article.types';
import { PostDetails } from './post-service.interface';

@Injectable({ providedIn: 'root' })
export class PostStoreService {
  private readonly articleState = signal<BlogArticle | null>(null);
  private readonly commentsState = signal<ReadonlyArray<BlogComment>>([]);
  private readonly activeArticleIdState = signal<number | null>(null);

  public readonly article = this.articleState.asReadonly();
  public readonly comments = this.commentsState.asReadonly();
  public readonly activeArticleId = this.activeArticleIdState.asReadonly();

  public savePost(article: BlogArticle | null): void {
    this.articleState.set(article ? { ...article } : null);
    this.activeArticleIdState.set(article?.id ?? null);
  }

  public saveComments(comments: ReadonlyArray<BlogComment>): void {
    this.commentsState.set(comments.map((comment) => ({ ...comment })));
  }

  public savePostDetails(details: PostDetails): void {
    this.savePost(details.article);
    this.saveComments(details.comments);
  }
}
