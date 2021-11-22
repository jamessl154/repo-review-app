import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
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
    }
});

const Text = ({ repoItemValue, repoItemLabel, style, ...props }) => {

    const textStyle = [
        repoItemValue && styles.repoItemValue,
        repoItemLabel && styles.repoItemLabel,
        style
    ];

    return <NativeText style={textStyle}  {...props} />;
};

export default Text;