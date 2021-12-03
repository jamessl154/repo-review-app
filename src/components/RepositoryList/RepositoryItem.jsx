import React from "react";
import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import View from '../View';
import ItemHeader from "./ItemHeader";
import ItemBody from "./ItemBody";
import theme from "../../theme";

export const RepositoryItemContainer = ({ item, styles }) => {

    return (
            <View style={styles.container} testID="repoItem" white>
                <ItemHeader
                    ownerAvatarUrl={item.ownerAvatarUrl}
                    fullName={item.fullName}
                    language={item.language}
                    description={item.description}
                />
                <ItemBody
                    forksCount={item.forksCount}
                    stargazersCount={item.stargazersCount}
                    ratingAverage={item.ratingAverage}
                    reviewCount={item.reviewCount}
                />
            </View>
    );
};

const RepositoryItem = ({ item }) => {
    const [pressed, setPressed] = React.useState(false);

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: pressed ? theme.twitterColors.blue : "white"
        }
    });

    return (
        <Link
            to={`repos/${item.id}`}
            onHideUnderlay={() => setPressed(false)}
            onShowUnderlay={() => setPressed(true)}
            underlayColor={null}
        >
            <RepositoryItemContainer item={item} styles={styles} />
        </Link>
    );
};

export default RepositoryItem;