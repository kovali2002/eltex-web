import { Component } from '@angular/core';
import { Header } from './ui/components/header/header';
import { Footer } from './ui/components/footer/footer';
import { Home } from './ui/pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}