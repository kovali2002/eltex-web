import { Component, input, output } from '@angular/core';
import { BlogArticle } from '../../../types/article.types';

@Component({
  selector: 'app-blog-articles',
  standalone: true,
  templateUrl: './blog-articles.html',
  styleUrl: './blog-articles.scss',
})
export class BlogArticles {
  public readonly featuredArticle = input<BlogArticle | null>(null);
  public readonly articles = input.required<ReadonlyArray<BlogArticle>>();
  public readonly deleteArticle = output<number>();
  public readonly editArticle = output<BlogArticle>();
}
