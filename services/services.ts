import { Post } from './../post.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dataservice } from '../dataservice';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  // fetch data
    httpposts: Post[] = [];
    searchText: string = "";
    filteredList: any[] = [];

    constructor(private fetchhttp: Dataservice) {}

    ngOnInit() {
      this.fetchhttp.getPosts().subscribe(data => {
        this.httpposts = data;
      });
      this.filteredList = [...this.httpposts]
    }

    // search functions
    filterPosts() {
      const text = this.searchText.toLowerCase().trim();

      this.filteredList = this.httpposts.filter(item =>
        item.title.toLowerCase().includes(text) ||
        item.body.toLowerCase().includes(text)
      );
    }
}
