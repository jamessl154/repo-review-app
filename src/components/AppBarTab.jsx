import React from 'react';
import { Pressable, Text } from 'react-native';

const AppBarTab = ({ tabText, onPress }) => {
    return (
        <Pressable style={{ flexGrow: 1, flexBasis: 1 }} onPress={onPress}>
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>{tabText}</Text>
        </Pressable>
    );
};

export default AppBarTab;