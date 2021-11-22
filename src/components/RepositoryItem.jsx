import React from "react";
import { Text, Image, StyleSheet } from 'react-native';
import View from './View';
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 10
    },
    header: {
        flexDirection: "column",
        borderWidth: 1,
        justifyContent: "space-around",
        paddingLeft: 10,
        // https://stackoverflow.com/a/57462018
        flexShrink: 1,
        height: 100
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    language: {
        backgroundColor:
        theme.twitterColors.darkGrey,
        borderRadius: 2
    }
});

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container} white>
            <View style={{ flexDirection: "row", borderWidth: 1 }}>
                <Image style={styles.icon} source={{ uri: item.ownerAvatarUrl }}/>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>{item.fullName}</Text>
                    <Text style={{ color: theme.twitterColors.darkGrey, fontSize: 15 }}>{item.description}</Text>
                    <View style={styles.language}>
                        <Text style={{ color: "white" }}>{item.language}</Text>
                    </View>
                </View>
            </View>

            
            <Text>Forks: {item.forksCount}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Average Rating: {item.ratingAverage}</Text>
            <Text>Total Reviews: {item.reviewCount}</Text>
        </View>
    );
};

export default RepositoryItem;