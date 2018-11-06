import gql from 'graphql-tag';

export default gql`
mutation createUser($createuserinput: CreateUserInput!) {
  createUser(input: $createuserinput) {
    username
    firstName
    lastName
    profilePicture
    email
  }
}`

// export const ListUsers = gql`
// query ListUsers($filter: TableUserFilterInput, $limit: Int, $nextToken: String) {
//   listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
//     items
//     nextToken
//   }
// }`

// export const operations = {
//   CreateUser: graphql(CreateUser, {
//     props: props => ({
//       createUser: (createuserinput) => {
//         return props.mutate({
//           variables: {
//             createuserinput
//           }
//         })
//       }
//     })
//   }),
//
//   ListUsers: graphql(ListUsers,{
//     props: props => ({
//       listUsers: (filter, limit, nextToken) => {
//         return props.query({
//           variables: {
//             filter,
//             limit,
//             nextToken
//           }
//         })
//       }
//     })
//   })
// }
