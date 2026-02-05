import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Dataservice {
  private postsURL = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const cachedPosts = localStorage.getItem('posts');

    if (cachedPosts){
      return of(JSON.parse(cachedPosts))

    }

     return this.http.get<Post[]>(this.postsURL).pipe(tap(posts => localStorage.setItem('posts', JSON.stringify(posts))))

  }

}
