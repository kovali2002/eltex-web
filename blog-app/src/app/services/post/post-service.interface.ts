import { Observable } from 'rxjs';
import { BlogArticle, BlogComment, NewCommentDraft } from '../../types/article.types';

export interface PostDetails {
  article: BlogArticle | null;
  comments: BlogComment[];
}

export interface PostServiceInterface {
  getPostWithComments(articleId: number): Observable<PostDetails>;
  addComment(articleId: number, draft: NewCommentDraft): Observable<PostDetails>;
  changeCommentRating(
    articleId: number,
    commentId: number,
    rating: number,
  ): Observable<PostDetails>;
  changeArticleRating(articleId: number, rating: number): Observable<PostDetails>;
}
