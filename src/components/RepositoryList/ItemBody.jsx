import React from 'react';
import View from '../View';
import Text from '../Text';

const toThousands = (numberString) => {
    const number = Number(numberString);
    // https://stackoverflow.com/a/7343013
    if (number >= 1000) return `${Math.round(number / 100) / 10}k`;
    else return numberString;
};

const ItemBody = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
    return (
        <View style= {{ flexDirection: "row", justifyContent: "space-evenly"}}>
            <View flexColumn>
                <Text testID='forks' repoItemValue>{toThousands(forksCount)}</Text>
                <Text repoItemLabel>Forks</Text>
            </View>
            <View flexColumn>
                <Text testID='stars' repoItemValue>{toThousands(stargazersCount)}</Text>
                <Text repoItemLabel>Stars</Text>
            </View>
            <View flexColumn>
                <Text testID='rating' repoItemValue>{toThousands(ratingAverage)}</Text>
                <Text repoItemLabel>Rating</Text>
            </View>
            <View flexColumn>
                <Text testID='reviews' repoItemValue>{toThousands(reviewCount)}</Text>
                <Text repoItemLabel>Reviews</Text>
            </View>
        </View>
    );
};

export default ItemBody;