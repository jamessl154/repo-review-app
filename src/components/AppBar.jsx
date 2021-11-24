import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import View from './View';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: Platform.OS === "ios" ? 68 : 88,
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
      </ScrollView>
    </View>
  );
};

export default AppBar;