import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
    query getRepositories {
        repositories {
            edges {
                node {
                    ...repositoryBaseFields
                }
            }
        }
    }

    ${REPOSITORY_BASE_FIELDS}
`;

export const GET_SINGLE_REPO = gql`
    query getSingleRepository($id: ID!) {
        repository(id: $id) {
            ...repositoryBaseFields
            url
            createdAt
            watchersCount
            openIssuesCount
        }
    }

    ${REPOSITORY_BASE_FIELDS}
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