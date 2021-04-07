import { Component, HostListener, OnInit } from '@angular/core';
import { PostsGQL } from 'src/app/apollo/queries/post/posts-gql.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  loading = true;
  posts!: Partial<Post>[];

  constructor(private postsGQL: PostsGQL) {}

  ngOnInit(): void {
    this.postsGQL
      .fetch()
      .toPromise()
      .then((response) => {
        this.posts = response.data.posts;
        this.loading = response.loading;
      })
      .catch((error) => {
        console.log('error has occured');
      });
  }
}
