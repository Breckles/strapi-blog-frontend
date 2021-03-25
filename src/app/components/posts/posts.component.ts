import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import POSTS_QUERY from 'src/app/apollo/queries/post/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  leftPostsCount: any;
  leftPosts!: any[];
  rightPosts!: any[];

  private queryPosts!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryPosts = this.apollo
      .watchQuery({
        query: POSTS_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.leftPostsCount = Math.ceil(this.data.posts.length / 5);
        this.leftPosts = this.data.posts.slice(0, this.leftPostsCount);
        this.rightPosts = this.data.posts.slice(
          this.leftPostsCount,
          this.data.posts.length
        );
        this.loading = result.loading;
        this.errors = result.errors;
        console.log(result);
      });
  }

  ngOnDestroy() {
    this.queryPosts.unsubscribe();
  }
}
