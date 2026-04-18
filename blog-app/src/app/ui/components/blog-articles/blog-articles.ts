import { Component, input, output } from '@angular/core';
import { BlogArticle } from '../../../article.model';

@Component({
  selector: 'app-blog-articles',
  standalone: true,
  templateUrl: './blog-articles.html',
  styleUrl: './blog-articles.scss',
})
export class BlogArticles {
  readonly featuredArticle = input<BlogArticle | null>(null);
  readonly articles = input.required<ReadonlyArray<BlogArticle>>();
  readonly deleteArticle = output<number>();
}
