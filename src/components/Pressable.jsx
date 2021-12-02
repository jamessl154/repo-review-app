import React from 'react';
import { Pressable as NativePressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: theme.twitterColors.blue,
        borderRadius: 5,
    },
});

const Pressable = ({ button, style, ...props }) => {

    const pressableStyle = [
        button && styles.pressable,
        style
    ];

    return <NativePressable style={pressableStyle}  {...props} />;
};

export default Pressable;