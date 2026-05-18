import { environment } from '../../../environments/environment';
import { BlogArticle, BlogCategory } from '../../types/article.types';

export interface BackendArticleCategory {
  id: string;
  name: string;
}

export interface BackendArticle {
  id: string;
  title: string;
  content: string;
  imgSrc: string | null;
  categoryId: string | null;
  category?: BackendArticleCategory | null;
  rating: number;
  createdAt: string;
  updatedAt?: string;
}

export function buildCategoryLookup(
  categories: ReadonlyArray<BlogCategory>,
): ReadonlyMap<string, string> {
  return new Map(categories.map((category) => [category.id, category.name]));
}

export function mapBackendArticle(
  article: BackendArticle,
  categoryLookup: ReadonlyMap<string, string> = new Map(),
): BlogArticle {
  const createdAt = new Date(article.createdAt);
  const hasValidDate = !Number.isNaN(createdAt.getTime());
  const categoryName =
    article.category?.name ??
    (article.categoryId ? categoryLookup.get(article.categoryId) : undefined) ??
    'New';

  return {
    id: article.id,
    title: article.title,
    text: article.content,
    dateLabel: hasValidDate
      ? createdAt.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : '',
    isoDate: hasValidDate
      ? createdAt.toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    tag: categoryName,
    theme: 'neutral',
    image: article.imgSrc ? resolveBackendAssetUrl(article.imgSrc) : 'images/Selection.png',
    isUserCreated: true,
    rating: article.rating ?? 0,
  };
}

function resolveBackendAssetUrl(path: string): string {
  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  const normalizedBaseUrl = environment.apiBaseUrl.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
}
