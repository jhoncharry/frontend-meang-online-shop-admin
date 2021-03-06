import gql from 'graphql-tag';

export const userFragment = gql`
  fragment UserObject on User {
    _id
    name
    lastname
    role
    active
    email
    registerDate @include(if: $include)
    birthday @include(if: $include)
  }
`;
