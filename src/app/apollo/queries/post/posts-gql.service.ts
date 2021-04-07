import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Post } from 'src/app/models/post';

export interface PostsGQLResponse {
  posts: Partial<Post>[];
}

@Injectable({
  providedIn: 'root',
})
export class PostsGQL extends Query<PostsGQLResponse> {
  document = gql`
    query Posts {
      posts {
        id
        title
        author
        image {
          url
          alternativeText
          formats
        }
        published_on
      }
    }
  `;
}
