import React from 'react';
import { StyleSheet } from 'react-native';
import View from './View';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 58,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container} black>
      <AppBarTab tabText="Repositories" to="/" />
      <AppBarTab tabText="Sign In" to="/signin" />
      <AppBarTab tabText="TODO" to="TODO" />
    </View>
  );
};

export default AppBar;