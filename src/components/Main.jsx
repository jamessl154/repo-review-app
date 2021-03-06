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
import MyReviews from './MyReviews';

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
        <Route path="/create-review" exact>
          <CreateReview />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/my-reviews">
          <MyReviews />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;