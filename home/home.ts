import { Post } from './../post.model';
import { CommonModule, AsyncPipe, DatePipe} from '@angular/common';
import { Component } from '@angular/core';
import { Dataservice } from '../dataservice';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AsyncPipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  httpposts: Post[] = [];

  constructor(private fetchhttp: Dataservice) {}

  ngOnInit() {
    this.fetchhttp.getPosts().subscribe(data => {
      this.httpposts = data;
    });
  }

  // pipes
  time$: Observable<Date> = interval(1000).pipe(map(() => new Date()))

}

