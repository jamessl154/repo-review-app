import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';

import View from '../View';
import AppBarTab from './AppBarTab';
import { GET_USER } from '../../graphql/queries';

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
  const { data, loading } = useQuery(GET_USER);

  if (!loading) {
    return (
      <View style={styles.container} black>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <AppBarTab tabText="Repositories" to="/" />
          {data && data.authorizedUser
            ? <AppBarTab tabText="Sign Out" to="/signout" />
            : <AppBarTab tabText="Sign In" to="/signin" />
          }
        </ScrollView>
      </View>
    );
  } else return null;
};

export default AppBar;