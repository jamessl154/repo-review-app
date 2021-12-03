import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    repoItemLabel: {
        textAlign: "center",
        color: theme.twitterColors.darkGrey
    },
    repoItemValue: {
        textAlign: "center",
        fontWeight: "700",
        color: theme.twitterColors.black
    },
    globalFont: {
        fontFamily: Platform.OS === "android" ? "Roboto"
        : Platform.OS === "ios" ? "Arial" : "System"
    },
    button: {
        padding: 10,
        fontSize: 20,
        fontWeight: "900",
        color: theme.twitterColors.white,
        textAlign: "center"
    },
    blue: {
        color: theme.twitterColors.blue,
    },
    black: {
        color: theme.twitterColors.black,
    },
    darkGrey: {
        color: theme.twitterColors.darkGrey,
    },
    midGrey: {
        color: theme.twitterColors.midGrey,
    },
    lightGrey: {
        color: theme.twitterColors.lightGrey,
    },
    white: {
        color: theme.twitterColors.white,
    },
});

const Text = ({ blue, black, darkGrey, midGrey, lightGrey, white, button, repoItemValue, repoItemLabel, style, ...props }) => {

    const textStyle = [
        styles.globalFont,
        blue && styles.blue,
        black && styles.black,
        darkGrey && styles.darkGrey,
        midGrey && styles.midGrey,
        lightGrey && styles.lightGrey,
        white && styles.white,
        repoItemValue && styles.repoItemValue,
        repoItemLabel && styles.repoItemLabel,
        button && styles.button,
        style
    ];

    return <NativeText style={textStyle}  {...props} />;
};

export default Text;