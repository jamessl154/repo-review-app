import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query getRepositories {
        repositories {
            edges {
                node {
                    fullName
                    ownerAvatarUrl
                    description
                    language
                    forksCount
                    stargazersCount
                    ratingAverage
                    reviewCount
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query getUser {
        authorizedUser {
            id
            username
        }
    }
`;