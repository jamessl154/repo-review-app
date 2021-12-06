import React from "react";
import { StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

import { RepositoryItemContainer } from '../RepositoryList/RepositoryItem';
import View from '../View';
import Text from "../Text";
import Pressable from '../Pressable';
import toThousands from "../../utils/toThousands";
import theme from "../../theme";

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

    const githubRedirect = () => WebBrowser.openBrowserAsync(repository.url);

    return (
        <View style={{ paddingBottom: 10 }}>
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
                <Pressable
                    mainBlueButton={"white"}
                    onPress={githubRedirect}
                >
                    {({ pressed }) => (
                        <Text
                            button
                            style={{
                                color: pressed
                                ? theme.twitterColors.blue
                                : theme.twitterColors.white
                            }}
                        >
                            Open in GitHub
                        </Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
};

export default RepositoryHeader;