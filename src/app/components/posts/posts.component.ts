import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription } from 'rxjs';
import {
  PostsForPostsGQL,
  AllPostsPartialsResponse,
} from 'src/app/apollo/queries/post/posts-for-posts-gql.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Partial<Post>[] = [];
  loading = true;
  errors: any;

  private queryPosts!: Subscription;

  constructor(private allPostsQuery: PostsForPostsGQL) {}

  ngOnInit() {
    this.queryPosts = this.allPostsQuery
      .watch()
      .valueChanges.subscribe(
        (result: ApolloQueryResult<AllPostsPartialsResponse>) => {
          this.posts = result.data.posts;
          this.loading = result.loading;
          this.errors = result.errors;
          console.log(this.posts[1]);
        }
      );
  }

  ngOnDestroy() {
    this.queryPosts.unsubscribe();
  }
}
