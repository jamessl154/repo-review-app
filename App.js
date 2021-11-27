import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

// workaround for Apollo/Client - Metro bundler conflict
// https://github.com/apollographql/apollo-client/releases/tag/v3.5.4

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;