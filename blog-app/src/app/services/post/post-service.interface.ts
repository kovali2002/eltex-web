import { Observable } from 'rxjs';
import { BlogArticle, BlogComment, NewCommentDraft } from '../../types/article.types';

export interface PostDetails {
  article: BlogArticle | null;
  comments: BlogComment[];
}

export interface PostServiceInterface {
  getPostWithComments(articleId: string): Observable<PostDetails>;
  addComment(articleId: string, draft: NewCommentDraft): Observable<PostDetails>;
  changeCommentRating(
    articleId: string,
    commentId: string,
    rating: number,
  ): Observable<PostDetails>;
  changeArticleRating(articleId: string, rating: number): Observable<PostDetails>;
}
