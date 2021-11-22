import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import View from './View';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';

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
      </Switch>
    </View>
  );
};

export default Main;