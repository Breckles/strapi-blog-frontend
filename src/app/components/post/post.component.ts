import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import POST_QUERY from 'src/app/apollo/queries/post/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: any;
  loading = true;
  errors: any;

  private queryPost!: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryPost = this.apollo
      .watchQuery({
        query: POST_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get('id'),
        },
      })
      .valueChanges.subscribe((result) => {
        let data = result.data as any;
        this.post = data.post;
        this.loading = result.loading;
        this.errors = result.errors;
        console.log(this.post.content);
      });
  }
  ngOnDestroy() {
    this.queryPost.unsubscribe();
  }
}
