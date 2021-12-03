import React from 'react';
import { Image, StyleSheet } from 'react-native';

import View from '../View';
import Text from '../Text';

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: 10,
        // https://stackoverflow.com/a/57462018
        flexShrink: 1,
        height: 150
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    language: {
        borderRadius: 5,
        marginRight: "auto",
        padding: 3
    }
});

const ItemHeader = ({ ownerAvatarUrl, fullName, language, description }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.icon} source={{ uri: ownerAvatarUrl }}/>
            <View style={styles.header}>
                <Text black style={styles.title} testID="fullName" >
                    {fullName}
                </Text>
                <Text style={{ fontSize: 15 }} darkGrey testID="description" >
                    {description}
                </Text>
                <View black style={styles.language}>
                    <Text white testID="language" >
                        {language}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ItemHeader;