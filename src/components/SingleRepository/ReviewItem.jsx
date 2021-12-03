import React from "react";
import { StyleSheet } from "react-native";
import { format } from 'date-fns';

import theme from "../../theme";
import Text from "../Text";
import View from "../View";

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    circleRating: {
        borderWidth: 2,
        borderColor: theme.twitterColors.black,
        height: 40,
        width: 40,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    ratingText: {
        fontSize: 17,
        fontWeight: "900"
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 2
    },
    text: {
        flexShrink: 1,
        height: 160,
        justifyContent: "flex-start"
    },
    subText: {
        marginBottom: 6
    }
});

const ReviewItem = ({ review }) => {

    const formattedDate = format(new Date(review.createdAt), 'yyyy.MM.dd');

    return (
        <View style={styles.container} flexRow white>
            <View style={{ paddingRight: 15 }}>
                <View style={styles.circleRating}>
                    <Text black style={styles.ratingText}>
                        {review.rating}
                    </Text>
                </View>
            </View>
            <View style={styles.text} flexColumn>
                <Text black style={styles.title}>
                    {review.user.username}
                </Text>
                <Text darkGrey style={styles.subText}>
                    {formattedDate}
                </Text>
                <Text black style={styles.subText}>
                    {review.text}
                </Text>
            </View>
        </View>
    );
};

export default ReviewItem;