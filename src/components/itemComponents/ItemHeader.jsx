import React from 'react';
import { Image, StyleSheet } from 'react-native';
import View from '../View';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: 10,
        // https://stackoverflow.com/a/57462018
        flexShrink: 1,
        height: 110
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: theme.twitterColors.black
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    language: {
        backgroundColor:
        theme.twitterColors.blue,
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
                <Text style={styles.title}>{fullName}</Text>
                <Text style={{ color: theme.twitterColors.darkGrey, fontSize: 15 }}>{description}</Text>
                <View style={styles.language}>
                    <Text style={{ color: "white" }}>{language}</Text>
                </View>
            </View>
        </View>
    );
};

export default ItemHeader;