import gql from 'graphql-tag';

export default gql`
query ListProfiles($filter: TableProfileFilterInput, $limit: Int, $nextToken: String) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      age
      picture
    }
    nextToken
  }
}`
