import { Component } from '@angular/core';
import { HomeArticlePreview } from '../../../article.model';
import { HomeArticles } from '../../components/home-articles/home-articles';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeArticles],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly skills = [
    'Swift / UIKit / SwiftUI',
    'HTML / CSS',
    'Angular',
    'Git / GitHub',
    'Java (backend)',
    'Figma',
  ];

  readonly workItems = [
    {
      icon: 'images/work-icon-1.png',
      period: 'СибГУТИ — (2022 - н.в.)',
      title: 'Студент ИВТ',
      description: 'Изучаю Java, алгоритмы, визуальное программирование, веб-разработку.',
    },
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

  readonly articles: HomeArticlePreview[] = [
    {
      tag: 'iOS',
      theme: 'red',
      title: 'Как я начал изучать iOS-разработку',
      text: 'Расскажу о своём опыте прохождения интенсива ШИФТ в ЦФТ: как проходило обучение, что изучали и что получилось в итоге.',
      image: 'images/Selection.png',
    },
    {
      tag: 'Git',
      theme: 'green',
      title: 'Git для начинающих: основные команды',
      text: 'Разбираем базовые команды Git которые нужны каждый день: init, add, commit, push, pull, branch и merge.',
      image: 'images/Selection.png',
    },
  ];

  readonly hobbyProjects = [
    { image: 'images/hobby-1.png', label: 'iOS приложение' },
    { image: 'images/hobby-2.png', label: 'Портфолио сайт' },
  ];

  readonly hobbyStack = [
    { image: 'images/Selection.png', label: 'Aurora OS' },
    { image: 'images/Selection.png', label: 'Java проект' },
  ];
}
