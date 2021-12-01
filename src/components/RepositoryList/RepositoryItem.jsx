import React from "react";
import { StyleSheet } from 'react-native';
import View from '../View';
import ItemHeader from "./ItemHeader";
import ItemBody from "./ItemBody";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 6
    }
});

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container} testID="repoItem" white>
            <ItemHeader
                ownerAvatarUrl={item.ownerAvatarUrl}
                fullName={item.fullName}
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