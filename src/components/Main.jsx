import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import View from './View';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

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
      <RepositoryList />
    </View>
  );
};

export default Main;