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
    // first is low to demonstrate infinite scrolling
    const variables = { first: 2, id };

    const { data, fetchMore, loading } = useQuery(
        GET_SINGLE_REPO,
        { variables, fetchPolicy: 'cache-and-network' }
    );

    const onEndReached = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (canFetchMore) {
            fetchMore({
                variables: {
                    ...variables,
                    after: data.repository.reviews.pageInfo.endCursor
                }
            });
        }
    };

    if (data && data.repository) {
        const { repository } = data;
        const { reviews } = repository;

        const reviewNodes = reviews
            ? reviews.edges.map(edge => edge.node)
            : [];

        return (
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} title={item.user.username} />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={() => <RepositoryHeader repository={repository} />}
                onEndReached={onEndReached}
                // low threshold to demonstrate infinite scrolling
                onEndReachedThreshold={0.01}
            />
        );
    } else return null;
};

export default SingleRepository;