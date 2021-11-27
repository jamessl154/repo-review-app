import React from "react";
import { StyleSheet } from 'react-native';
import View from './View';
import ItemHeader from "./itemComponents/ItemHeader";
import ItemBody from "./itemComponents/ItemBody";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 6
    }
});

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container} white>
            <ItemHeader
                ownerAvatarUrl={item.ownerAvatarUrl}
                fullName={`${item.name}/${item.ownerName}`}
                language={item.language}
                description={item.description}
            />
            <ItemBody
                forksCount={item.forksCount}
                stargazersCount={item.stargazersCount}
                ratingAverage={item.ratingAverage}
                reviewCount={item.reviewCount}
            />
        </View>
    );
};

export default RepositoryItem;