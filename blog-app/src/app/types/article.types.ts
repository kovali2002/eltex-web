export type ArticleTheme = 'red' | 'green' | 'neutral';

export interface BlogArticle {
  id: string;
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
  categoryName: string;
  imageFile: File | null;
}

export type ArticleFormMode = 'create' | 'edit';

export interface BlogComment {
  id: string;
  articleId: string;
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

export interface BlogCategory {
  id: string;
  name: string;
}
