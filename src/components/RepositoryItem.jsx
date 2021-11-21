import React from "react";
import { Text } from 'react-native';
import View from './View';

const RepositoryItem = ({ item }) => {

    return (
        <View blue>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Average Rating: {item.ratingAverage}</Text>
            <Text>Total Reviews: {item.reviewCount}</Text>
        </View>
    );
};

export default RepositoryItem;