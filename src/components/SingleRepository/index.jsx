import React from "react";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { FlatList, StyleSheet } from "react-native";

import { GET_SINGLE_REPO } from '../../graphql/queries';
import RepositoryHeader from "./RepositoryHeader";
import ReviewItem from "./ReviewItem";
import View from "../View";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
    const { id } = useParams();
    const { data } = useQuery(
        GET_SINGLE_REPO,
        { variables: { id }, fetchPolicy: 'cache-and-network' }
    );

    if (data && data.repository) {
        const { repository } = data;
        const { reviews } = repository;

        const reviewNodes = reviews
            ? reviews.edges.map(edge => edge.node)
            : [];

        return (
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={() => <RepositoryHeader repository={repository} />}
            />
        );
    } else return null;
};

export default SingleRepository;