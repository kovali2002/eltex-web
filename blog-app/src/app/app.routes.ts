import { Routes } from '@angular/router';
import { Blog } from './ui/pages/blog/blog';
import { Home } from './ui/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Главная | Kovali-folio',
  },
  {
    path: 'blog',
    component: Blog,
    title: 'Блог | Kovali-folio',
  },
];
