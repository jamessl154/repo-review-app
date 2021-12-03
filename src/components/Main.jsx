import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Route, Switch } from 'react-router-native';

import View from './View';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

StatusBar.setBarStyle('light-content', true);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container} lightGrey>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/repos/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/createReview" exact>
          <CreateReview />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;