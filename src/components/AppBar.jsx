import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import View from './View';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 68,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container} black>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab tabText="Repositories" to="/" />
        <AppBarTab tabText="Sign In" to="/signin" />
        <AppBarTab tabText="TODO" to="TODO" />
        <AppBarTab tabText="Complete" to="/" />
        <AppBarTab tabText="Test" to="/signin" />
        <AppBarTab tabText="Of the" to="TODO" />
        <AppBarTab tabText="New" to="/" />
        <AppBarTab tabText="Horizontal" to="/signin" />
        <AppBarTab tabText="Scrollbar" to="TODO" />
        <AppBarTab tabText="Implementation" to="/" />
        <AppBarTab tabText="Is Now" to="/signin" />
        <AppBarTab tabText="Finished" to="TODO" />
      </ScrollView>
    </View>
  );
};

export default AppBar;