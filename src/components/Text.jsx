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
});

const Text = ({ button, repoItemValue, repoItemLabel, style, ...props }) => {

    const textStyle = [
        styles.globalFont,
        repoItemValue && styles.repoItemValue,
        repoItemLabel && styles.repoItemLabel,
        button && styles.button,
        style
    ];

    return <NativeText style={textStyle}  {...props} />;
};

export default Text;