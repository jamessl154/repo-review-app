import React from "react";
import { Image, StyleSheet } from 'react-native';
import View from './View';
import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 6,
        borderWidth: 1
    },
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

const toThousands = (numberString) => {
    const number = Number(numberString);
    // https://stackoverflow.com/a/7343013
    if (number >= 1000) return `${Math.round(number / 100) / 10}k`;
    else return numberString;
};

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container} white>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={styles.icon} source={{ uri: item.ownerAvatarUrl }}/>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.fullName}</Text>
                    <Text style={{ color: theme.twitterColors.darkGrey, fontSize: 15 }}>{item.description}</Text>
                    <View style={styles.language}>
                        <Text style={{ color: "white" }}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style= {{ flexDirection: "row", justifyContent: "space-evenly"}}>
                <View flexColumn>
                    <Text repoItemValue>{toThousands(item.forksCount)}</Text>
                    <Text repoItemLabel>Forks</Text>
                </View>
                <View flexColumn>
                    <Text repoItemValue>{toThousands(item.stargazersCount)}</Text>
                    <Text repoItemLabel>Stars</Text>
                </View>
                <View flexColumn>
                    <Text repoItemValue>{toThousands(item.ratingAverage)}</Text>
                    <Text repoItemLabel>Rating</Text>
                </View>
                <View flexColumn>
                    <Text repoItemValue>{toThousands(item.reviewCount)}</Text>
                    <Text repoItemLabel>Reviews</Text>
                </View>
            </View>
            

        </View>
    );
};

export default RepositoryItem;