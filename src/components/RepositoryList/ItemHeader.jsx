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
        height: 150
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: theme.twitterColors.black
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    language: {
        backgroundColor: theme.twitterColors.black,
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
                <Text style={styles.title} testID="fullName" >{fullName}</Text>
                <Text style={{ color: theme.twitterColors.darkGrey, fontSize: 15 }} testID="description" >{description}</Text>
                <View style={styles.language}>
                    <Text style={{ color: "white" }} testID="language" >{language}</Text>
                </View>
            </View>
        </View>
    );
};

export default ItemHeader;