import React from "react";
import { StyleSheet, Pressable as NativePressable } from "react-native";

import Pressable from "../Pressable";
import ReviewItem from "../SingleRepository/ReviewItem";
import Text from "../Text";
import View from "../View";
import theme from "../../theme";

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

    const handleView = () => console.log("TODO1");

    const handleDelete = () => console.log("TODO2");

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