import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SinglePostGQL,
  SinglePostResponse,
} from 'src/app/apollo/queries/post/single-post-gql.service';
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
    private singlePostQuery: SinglePostGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.queryPost = this.singlePostQuery
      .watch({ id: this.route.snapshot.paramMap.get('id') })
      .valueChanges.subscribe(
        (result: ApolloQueryResult<SinglePostResponse>) => {
          this.post = result.data.post;
          this.loading = result.loading;
          this.errors = result.errors;
        }
      );
  }
  ngOnDestroy() {
    this.queryPost.unsubscribe();
  }
}
