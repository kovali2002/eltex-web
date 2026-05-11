import { Routes } from '@angular/router';
import { Blog } from './ui/pages/blog/blog';
import { Home } from './ui/pages/home/home';
import { Post } from './ui/pages/post/post';

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
  {
    path: 'blog/:id',
    component: Post,
  },
];
