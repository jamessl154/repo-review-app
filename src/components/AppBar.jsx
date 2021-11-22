import React from 'react';
import { StyleSheet, Alert } from 'react-native';
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

const onPress = () => Alert.alert("test");

const AppBar = () => {
  return (
    <View style={styles.container} black>
      <AppBarTab tabText="Repositories" onPress={onPress} />
      <AppBarTab tabText="TODO" onPress={onPress} />
      <AppBarTab tabText="TODO" onPress={onPress} />
    </View>
  );
};

export default AppBar;