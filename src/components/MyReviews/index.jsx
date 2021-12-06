import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";

import View from "../View";
import ExpandedReview from "./ExpandedReview";
import { GET_USER } from "../../graphql/queries";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    // low first parameter for testing
    const variables = { includeReviews: true, first: 4 };
    const { data, loading, refetch, fetchMore } = useQuery(GET_USER, {
        variables,
        fetchPolicy: 'cache-and-network'
    });

    const handleEndReached = () => {
        const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

        if (canFetchMore) {
            fetchMore({
                variables: {
                    ...variables,
                    after: data.authorizedUser.reviews.pageInfo.endCursor,
                },
            });
        }
    };

    if (data && data.authorizedUser) {

        const reviews = data.authorizedUser.reviews;

        const reviewNodes = reviews
            ? reviews.edges.map(edge => edge.node)
            : [];

        return (
            <FlatList
                data={reviewNodes}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) =>
                    <ExpandedReview
                        refetch={refetch}
                        review={item}
                        title={item.repository.fullName}
                    />}
                onEndReached={handleEndReached}
                // low threshold for testing
                onEndReachedThreshold={0.01}
            />
        );

    } else return null;


};

export default MyReviews;