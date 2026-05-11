import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogArticle } from '../../../types/article.types';

@Component({
  selector: 'app-home-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-articles.html',
  styleUrl: './home-articles.scss',
})
export class HomeArticles {
  public readonly articles = input.required<ReadonlyArray<BlogArticle>>();
}
