import { gql } from '@apollo/client';

export const REPOSITORY_BASE_FIELDS = gql`
  fragment repositoryBaseFields on Repository {
    id
    fullName
    ownerAvatarUrl
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
  }
`;

export const REVIEW_BASE_FIELDS = gql`
  fragment reviewBaseFields on Review {
    id
    rating
    createdAt
    text
    user {
      id
      username
    }
  }
`;