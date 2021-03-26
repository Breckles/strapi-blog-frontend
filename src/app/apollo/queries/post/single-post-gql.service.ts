import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

import { Post } from 'src/app/models/post';

export interface SinglePostResponse {
  post: Post;
}

@Injectable({
  providedIn: 'root',
})
export class SinglePostGQL extends Query<SinglePostResponse> {
  document = gql`
    query Posts($id: ID!) {
      post(id: $id) {
        id
        title
        author
        content
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
