import { InjectionToken, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BackendPostService } from './backend-post.service';
import { PostServiceInterface } from './post-service.interface';
import { PostService } from './post.service';

export const POST_SERVICE = new InjectionToken<PostServiceInterface>('POST_SERVICE', {
  providedIn: 'root',
  factory: () => (environment.useBackend ? inject(BackendPostService) : inject(PostService)),
});
