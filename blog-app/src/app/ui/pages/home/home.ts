import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';
import { ARTICLES_SERVICE } from '../../../services/articles/articles-service.token';
import { HomeEducation } from '../../components/home-education/home-education';
import { HomeHero } from '../../components/home-hero/home-hero';
import { HomeHobby } from '../../components/home-hobby/home-hobby';
import { HomeArticles } from '../../components/home-articles/home-articles';
import { HomeSkills } from '../../components/home-skills/home-skills';
import { HomeWork } from '../../components/home-work/home-work';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHero, HomeArticles, HomeSkills, HomeWork, HomeEducation, HomeHobby],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly homeArticlesPage = 1;
  private readonly homeArticlesPageSize = 2;
  private readonly articlesService = inject(ARTICLES_SERVICE);
  private readonly articlesStore = inject(ArticlesStoreService);

  protected readonly articles = this.articlesStore.articles;

  protected readonly skills = [
    'Swift / UIKit / SwiftUI',
    'HTML / CSS',
    'Angular',
    'Git / GitHub',
    'Java (backend)',
    'Figma',
  ];

  protected readonly workItems = [
    {
      icon: 'images/work-icon-2.png',
      period: 'ШИФТ ЦФТ — (Апрель - Июнь 2023)',
      title: 'iOS-разработчик',
      description: '80 часов интенсива: Swift, UIKit, SwiftUI, MVC/MVVM. Получен сертификат.',
    },
    {
      icon: 'images/work-icon-3.png',
      period: 'Eltex — (2025 - н.в.)',
      title: 'Веб-разработчик (курс)',
      description: 'HTML, CSS, JavaScript, Angular, Git. Вёрстка по макетам Figma.',
    },
  ];

  protected readonly educationItems = [
    {
      period: '2022 - н.в.',
      title: 'СибГУТИ, Информатика и вычислительная техника',
      description: 'Изучаю Java, алгоритмы, визуальное программирование, веб-разработку.',
    },
    {
      period: 'Апрель - Июнь 2023',
      title: 'Интенсив ШИФТ ЦФТ по iOS-разработке',
      description: '80 часов практики: Swift, UIKit, SwiftUI, MVC/MVVM. Получен сертификат.',
    },
  ];

  protected readonly hobbyProjects = [
    { image: 'images/hobby-1.png', label: 'iOS приложение' },
    { image: 'images/hobby-2.png', label: 'Портфолио сайт' },
  ];

  protected readonly hobbyStack = [
    { image: 'images/Selection.png', label: 'Aurora OS' },
    { image: 'images/Selection.png', label: 'Java проект' },
  ];

  public ngOnInit(): void {
    if (this.articlesStore.hasSnapshot(this.homeArticlesPage, this.homeArticlesPageSize)) {
      return;
    }

    this.articlesService
      .getArticles({
        page: this.homeArticlesPage,
        pageSize: this.homeArticlesPageSize,
      })
      .pipe(take(1))
      .subscribe((response) => this.articlesStore.savePage(response));
  }
}
