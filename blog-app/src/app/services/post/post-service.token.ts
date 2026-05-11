import { InjectionToken, inject } from '@angular/core';
import { PostServiceInterface } from './post-service.interface';
import { PostService } from './post.service';

export const POST_SERVICE = new InjectionToken<PostServiceInterface>('POST_SERVICE', {
  providedIn: 'root',
  factory: () => inject(PostService),
});
