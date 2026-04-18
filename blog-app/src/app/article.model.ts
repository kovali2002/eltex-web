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
}

export interface HomeArticlePreview {
  tag: string;
  title: string;
  text: string;
  image: string;
  theme: ArticleTheme;
}

export interface NewArticleDraft {
  title: string;
  text: string;
}
