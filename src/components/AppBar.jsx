import React from 'react';
import { StyleSheet, Pressable, Alert, Text } from 'react-native';
import View from './View';

const styles = StyleSheet.create({
  container: {
    // TODO
  },
});

const onPress = () => Alert.alert("test");

const AppBar = () => {
  return (
  <View style={styles.container} black>
      <Pressable onPress={onPress}>
          <Text style={{ color: "white" }}>Repositories</Text>
      </Pressable>
  </View>
  );
};

export default AppBar;