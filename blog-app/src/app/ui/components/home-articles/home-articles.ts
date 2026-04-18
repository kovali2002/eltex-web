import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeArticlePreview } from '../../../article.model';

@Component({
  selector: 'app-home-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-articles.html',
  styleUrl: './home-articles.scss',
})
export class HomeArticles {
  readonly articles = input.required<ReadonlyArray<HomeArticlePreview>>();
}
