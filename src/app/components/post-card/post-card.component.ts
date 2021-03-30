import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input()
  post!: Partial<Post>;

  constructor() {}

  ngOnInit(): void {
    if (!this.post) {
      throw new Error("A value for 'Post' must be provided.");
    }
  }
}
