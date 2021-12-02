import React from "react";
import { StyleSheet } from "react-native";
// import { useApolloClient } from "@apollo/client";

import { RepositoryItemContainer } from '../RepositoryList/RepositoryItem';
// import View from '../View';

const SingleRepository = () => {
    // const apolloClient = useApolloClient();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
        }
    });

    const item = {
        "description": "Predictable state container for JavaScript apps",
        "forksCount": 14971,
        "fullName": "reduxjs/redux",
        "id": "reduxjs.redux",
        "language": "TypeScript",
        "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/13142323?v=4",    
        "ratingAverage": 0,
        "reviewCount": 0,
        "stargazersCount": 57097,
        "url": "https://github.com/reduxjs/redux",
    };

    if (!item) return null;

    return (
        <RepositoryItemContainer item={item} styles={styles} />
    );
};

export default SingleRepository;