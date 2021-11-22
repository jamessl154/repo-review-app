import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import View from './View';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';

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
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;