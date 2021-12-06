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
    const { data, refetch } = useQuery(GET_USER, {
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network'
    });

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
            />
        );

    } else return null;


};

export default MyReviews;