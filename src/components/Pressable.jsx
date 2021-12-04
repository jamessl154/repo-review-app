import React from 'react';
import { Pressable as NativePressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.twitterColors.blue,
        borderRadius: 5,
    },
});

const Pressable = ({ mainBlueButton, button, style, ...props }) => {

    const pressableStyle = [
        button && styles.button,
        style
    ];

    if (mainBlueButton) {
        return (
            // https://reactnative.dev/docs/pressable
            <NativePressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? mainBlueButton
                            : theme.twitterColors.blue,
                        borderRadius: 5
                    },
                    pressableStyle
                ]}
                {...props}
            />
        );
    } else return <NativePressable style={pressableStyle} {...props} />;

};

export default Pressable;