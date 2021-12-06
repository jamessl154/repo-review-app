import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, REVIEW_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
    query getRepositories(
        $orderDirection: OrderDirection,
        $orderBy: AllRepositoriesOrderBy,
        $searchKeyword: String,
        $first: Int,
        $after: String
    ) {
        repositories(
            orderDirection: $orderDirection,
            orderBy: $orderBy,
            searchKeyword: $searchKeyword,
            first: $first,
            after: $after
        ) {
            edges {
                node {
                    ...repositoryBaseFields
                }
                cursor
            },
            pageInfo {
                startCursor
                endCursor
                hasNextPage
            }
        }
    }

    ${REPOSITORY_BASE_FIELDS}
`;

export const GET_SINGLE_REPO = gql`
    query getSingleRepository($id: ID!, $first: Int, $after: String) {
        repository(id: $id) {
            ...repositoryBaseFields
            url
            createdAt
            watchersCount
            openIssuesCount
            reviews(first: $first, after: $after) {
                edges {
                    node {
                        ...reviewBaseFields
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
    ${REVIEW_BASE_FIELDS}
    ${REPOSITORY_BASE_FIELDS}
`;

// https://stackoverflow.com/a/69054303
export const GET_USER = gql`
    query getUser($includeReviews: Boolean = false, $first: Int, $after: String) {
        authorizedUser {
            id
            username
            reviews(first: $first, after: $after) @include(if: $includeReviews) {
                edges {
                    node {
                        ...reviewBaseFields
                        repository {
                            fullName
                            id
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
    ${REVIEW_BASE_FIELDS}
`;