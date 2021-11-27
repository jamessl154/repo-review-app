import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    name
                    ownerName
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