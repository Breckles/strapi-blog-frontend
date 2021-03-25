import gql from 'graphql-tag';

const POST_QUERY = gql`
  query Posts($id: ID!) {
    post(id: $id) {
      id
      title
      content
      image {
        url
      }
      category {
        id
        name
      }
      published_on
    }
  }
`;

export default POST_QUERY;
