import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation Signup($firstName: String!, $lastName: String!, $email: String!, $username: String!,  $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password) {
      token,
      user {
        username,
        email
      }
    }
  }
`