import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query getRepositories {
        repositories {
            edges {
                node {
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
            }
        }
    }
`;

// url
// createdAt
// watchersCount
// openIssuesCount
// reviews {
//     edges {
//         node {
//             id
//             user {
//                 id
//                 username
//             }
//             rating
//             createdAt
//             text
//         }
//     }
// }

export const GET_USER = gql`
    query getUser {
        authorizedUser {
            id
            username
        }
    }
`;