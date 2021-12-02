import React from "react";
import { RepositoryItemContainer } from '../RepositoryList/RepositoryItem';
import { StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import View from '../View';
import Text from "../Text";
import Pressable from '../Pressable';
import toThousands from "../../utils/toThousands";

const RepositoryHeader = ({ repository }) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            paddingHorizontal: 15,
            paddingBottom: 15
        },
        row: {
            paddingBottom: 15,
            flexDirection: "row",
            justifyContent: "center"
        },
        unit: {
            width: 60,
        }
    });

    const handlePress = () => WebBrowser.openBrowserAsync(repository.url);

    return (
        <>
            <RepositoryItemContainer item={repository} styles={styles} />
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.unit} flexColumn>
                        <Text repoItemValue>{toThousands(repository.watchersCount)}</Text>
                        <Text repoItemLabel>Watchers</Text>
                    </View>
                    <View style={styles.unit} flexColumn>
                        <Text repoItemValue>{toThousands(repository.openIssuesCount)}</Text>
                        <Text repoItemLabel>Issues</Text>
                    </View>
                </View>
                <Pressable onPress={handlePress} button>
                    <Text button>Open in GitHub</Text>
                </Pressable>
            </View>
        </>
    );
};

export default RepositoryHeader;