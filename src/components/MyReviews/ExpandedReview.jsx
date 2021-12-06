import React from "react";
import { StyleSheet, Pressable as NativePressable, Alert } from "react-native";
import { useHistory } from "react-router-native";

import Pressable from "../Pressable";
import ReviewItem from "../SingleRepository/ReviewItem";
import Text from "../Text";
import View from "../View";
import theme from "../../theme";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        paddingHorizontal: 5,
        paddingBottom: 10
    },
    button: {
        flexGrow: 1,
        flexShrink: 1,
        marginHorizontal: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        padding: 10,
        textAlign: "center"
    },
});

const ExpandedReview = ({ review, title, refetch }) => {
    const [deleteReview] = useDeleteReview();
    const history = useHistory();

    const handleView = () => history.push(`repos/${review.repository.id}`);

    const handleDelete = () => Alert.alert(
        "Delete this Review?",
        null,
        [
            {
                text: "Yes",
                onPress: () => {
                    deleteReview(review.id);
                    refetch();
                }
            },
            {
                text: "No",
                onPress: () => null
            }
        ]
    );

    return (
        <>
            <ReviewItem
                review={review}
                title={title}
            />
            <View style={styles.container} white flexRow>
                <Pressable
                    onPress={handleView}
                    style={styles.button}
                    mainBlueButton="white"
                >
                    {({ pressed }) => (
                        <Text
                            style={{
                                color: pressed ? theme.twitterColors.blue : "white",
                                ...styles.text
                            }}
                        >
                            View Repository
                        </Text>
                    )}
                </Pressable>
                <NativePressable onPress={handleDelete} style={({ pressed }) => [
                    { backgroundColor: pressed ? "white" : theme.twitterColors.red },
                    styles.button
                ]}>
                    {({ pressed }) => (
                        <Text
                            style={{
                                color: pressed ? theme.twitterColors.red : "white",
                                ...styles.text
                            }}
                        >
                            Delete Review
                        </Text>
                    )}
                </NativePressable>
            </View>
        </>
    );
};

export default ExpandedReview;