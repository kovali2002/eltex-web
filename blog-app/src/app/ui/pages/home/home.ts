import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  skills = [
    'Swift / UIKit / SwiftUI',
    'HTML / CSS',
    'Angular',
    'Git / GitHub',
    'Java (backend)',
    'Figma',
  ];

  workItems = [
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

  articles = [
    {
      tag: 'iOS',
      tagClass: 'article-tag--red',
      cardClass: 'article-card--red',
      title: 'Как я начал изучать iOS-разработку',
      text: 'Расскажу о своём опыте прохождения интенсива ШИФТ в ЦФТ: как проходило обучение, что изучали и что получилось в итоге.',
    },
    {
      tag: 'Git',
      tagClass: 'article-tag--green',
      cardClass: 'article-card--green',
      title: 'Git для начинающих: основные команды',
      text: 'Разбираем базовые команды Git которые нужны каждый день: init, add, commit, push, pull, branch и merge.',
    },
  ];

  hobbyProjects = [
    { image: 'images/hobby-1.png', label: 'iOS приложение', isStack: false },
    { image: 'images/hobby-2.png', label: 'Портфолио сайт', isStack: false },
  ];

  hobbyStack = [
    { image: 'images/Selection.png', label: 'Aurora OS' },
    { image: 'images/Selection.png', label: 'Java проект' },
  ];
}