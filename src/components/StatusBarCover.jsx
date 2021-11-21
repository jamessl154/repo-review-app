import React from 'react';
import { StyleSheet } from 'react-native';
import View from './View';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
});

const StatusBarCover = () => {
    return (
        <View style={styles.container} black></View>
    );
};

export default StatusBarCover;