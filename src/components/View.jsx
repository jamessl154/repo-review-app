import React from 'react';
import { View as NativeView, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    blue: {
        backgroundColor: theme.twitterColors.blue,
    },
    black: {
        backgroundColor: theme.twitterColors.black,
    },
    darkGrey: {
        backgroundColor: theme.twitterColors.darkGrey,
    },
    midGrey: {
        backgroundColor: theme.twitterColors.midGrey,
    },
    lightGrey: {
        backgroundColor: theme.twitterColors.lightGrey,
    },
    white: {
        backgroundColor: theme.twitterColors.white,
    },
    flexColumn: {
        flexDirection: "column"
    },
    flexRow: {
        flexDirection: "row"
    }
});

const View = ({ blue, black, darkGrey, midGrey, lightGrey, white, flexColumn, flexRow, style, ...props }) => {

    const viewStyle = [
        blue && styles.blue,
        black && styles.black,
        darkGrey && styles.darkGrey,
        midGrey && styles.midGrey,
        lightGrey && styles.lightGrey,
        white && styles.white,
        flexColumn && styles.flexColumn,
        flexRow && styles.flexRow,
        style
    ];

    return <NativeView style={viewStyle}  {...props} />;
};

export default View;