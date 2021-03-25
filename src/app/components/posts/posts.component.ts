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
  posts: any[] = [];
  loading = true;
  errors: any;

  private queryPosts!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryPosts = this.apollo
      .watchQuery({
        query: POSTS_QUERY,
      })
      .valueChanges.subscribe((result) => {
        const data = result.data as any;
        this.posts = data.posts;
        this.loading = result.loading;
        this.errors = result.errors;
        console.log(result);
      });
  }

  ngOnDestroy() {
    this.queryPosts.unsubscribe();
  }
}
