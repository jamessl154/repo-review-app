import React from 'react';
import { StyleSheet } from 'react-native';

import View from '../View';
import Text from '../Text';
import toThousands from '../../utils/toThousands';

const styles = StyleSheet.create({
    unit: {
        width: 60,
    }
});

const ItemBody = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={styles.unit} flexColumn>
                <Text testID='forks' repoItemValue>{toThousands(forksCount)}</Text>
                <Text repoItemLabel>Forks</Text>
            </View>
            <View style={styles.unit} flexColumn>
                <Text testID='stars' repoItemValue>{toThousands(stargazersCount)}</Text>
                <Text repoItemLabel>Stars</Text>
            </View>
            <View style={styles.unit} flexColumn>
                <Text testID='rating' repoItemValue>{toThousands(ratingAverage)}</Text>
                <Text repoItemLabel>Rating</Text>
            </View>
            <View style={styles.unit} flexColumn>
                <Text testID='reviews' repoItemValue>{toThousands(reviewCount)}</Text>
                <Text repoItemLabel>Reviews</Text>
            </View>
        </View>
    );
};

export default ItemBody;