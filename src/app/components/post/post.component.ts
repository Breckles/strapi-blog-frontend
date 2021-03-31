import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription } from 'rxjs';
import {
  PostforPostGQL,
  SinglePostResponse,
} from 'src/app/apollo/queries/post/post-for-post-gql.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post!: Post;
  loading = true;
  errors: any;

  private queryPost!: Subscription;

  constructor(
    private singlePostQuery: PostforPostGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.queryPost = this.singlePostQuery
      .fetch({ id: this.route.snapshot.paramMap.get('id') })
      .subscribe((result: ApolloQueryResult<SinglePostResponse>) => {
        this.post = result.data.post;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryPost.unsubscribe();
  }
}
