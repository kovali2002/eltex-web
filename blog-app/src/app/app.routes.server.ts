import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      Array.from({ length: 7 }, (_, index) => ({
        id: String(index + 1),
      })),
  },
];
