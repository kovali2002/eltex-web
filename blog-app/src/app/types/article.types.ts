export type ArticleTheme = 'red' | 'green' | 'neutral';

export interface BlogArticle {
  id: number;
  title: string;
  text: string;
  dateLabel: string;
  isoDate: string;
  tag: string;
  theme: ArticleTheme;
  image: string;
  isUserCreated: boolean;
  rating: number;
}

export interface HomeArticlePreview {
  tag: string;
  title: string;
  text: string;
  image: string;
}

export interface NewArticleDraft {
  title: string;
  text: string;
}

export type ArticleFormMode = 'create' | 'edit';

export interface BlogComment {
  id: number;
  articleId: number;
  author: string;
  text: string;
  dateLabel: string;
  isoDate: string;
  rating: number;
}

export interface NewCommentDraft {
  author: string;
  text: string;
}
