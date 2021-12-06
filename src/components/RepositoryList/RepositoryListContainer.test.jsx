import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListContainer } from './index.jsx';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {

        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };

        const refetch = jest.fn();

        // https://github.com/zth/relay-modern-flow-jest-example/blob/42b44875365f33b6e25a8b6d0f3ea85166ef6cca/src/components/__tests__/App-tests.js#L25
        const r = render(<RepositoryListContainer repositories={repositories} refetch={refetch} />);

        const repoItems = r.getAllByTestId('repoItem');
        expect(repoItems.length).toBe(2);

        const fullNames = r.getAllByTestId('fullName');
        expect(fullNames[0]).toHaveTextContent('jaredpalmer/formik');
        expect(fullNames[1]).toHaveTextContent('async-library/react-async');

        const descriptions = r.getAllByTestId('description');
        expect(descriptions[0]).toHaveTextContent('Build forms in React, without the tears');
        expect(descriptions[1]).toHaveTextContent('Flexible promise-based React data loader');

        const languages = r.getAllByTestId('language');
        expect(languages[0]).toHaveTextContent('TypeScript');
        expect(languages[1]).toHaveTextContent('JavaScript');

        const forks = r.getAllByTestId('forks');
        expect(forks[0]).toHaveTextContent('1.6k');
        expect(forks[1]).toHaveTextContent('69');

        const stars = r.getAllByTestId('stars');
        expect(stars[0]).toHaveTextContent('21.9k');
        expect(stars[1]).toHaveTextContent('1.8k');

        const rating = r.getAllByTestId('rating');
        expect(rating[0]).toHaveTextContent('88');
        expect(rating[1]).toHaveTextContent('72');

        const reviews = r.getAllByTestId('reviews');
        expect(reviews[0]).toHaveTextContent('3');
        expect(reviews[1]).toHaveTextContent('3');
      });
    });
  });