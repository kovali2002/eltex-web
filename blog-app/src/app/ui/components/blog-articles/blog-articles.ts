import { Component, computed, input, output } from '@angular/core';
import { BlogArticle } from '../../../types/article.types';

@Component({
  selector: 'app-blog-articles',
  standalone: true,
  templateUrl: './blog-articles.html',
  styleUrl: './blog-articles.scss',
})
export class BlogArticles {
  public readonly articles = input.required<ReadonlyArray<BlogArticle>>();
  public readonly activePage = input.required<number>();
  public readonly pageSize = input.required<number>();
  public readonly totalCount = input.required<number>();
  public readonly deleteArticle = output<number>();
  public readonly editArticle = output<BlogArticle>();
  public readonly pageChange = output<number>();

  protected readonly featuredArticle = computed(() => this.articles()[0] ?? null);
  protected readonly regularArticles = computed(() => this.articles().slice(1));
  protected readonly totalPages = computed(() => Math.ceil(this.totalCount() / this.pageSize()));
  protected readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  protected selectPage(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.activePage()) {
      return;
    }

    this.pageChange.emit(page);
  }
}
