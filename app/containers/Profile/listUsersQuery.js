import gql from 'graphql-tag';

export default gql`
query ListUsers($filter: TableUserFilterInput, $limit: Int, $nextToken: String) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      profilePicture
    }
    nextToken
  }
}`
