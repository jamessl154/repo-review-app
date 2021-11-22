import React from 'react';
import { StyleSheet, Pressable, Alert, Text } from 'react-native';
import View from './View';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    paddingLeft: 5,
    paddingRight: 5
  },
});

const onPress = () => Alert.alert("test");

const AppBar = () => {
  return (
  <View style={styles.container} black>
      <Pressable style={{ flexGrow: 1, flexBasis: 1 }} onPress={onPress}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Repositories</Text>
      </Pressable>
      <Pressable style={{ flexGrow: 1, flexBasis: 1 }} onPress={onPress}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>TODO</Text>
      </Pressable>
      <Pressable style={{ flexGrow: 1, flexBasis: 1 }} onPress={onPress}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>TODO</Text>
      </Pressable>
  </View>
  );
};

export default AppBar;