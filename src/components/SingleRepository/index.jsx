import React from "react";
import { StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import { RepositoryItemContainer } from '../RepositoryList/RepositoryItem';
import { GET_SINGLE_REPO } from '../../graphql/queries';
import View from '../View';
import Text from "../Text";
import Pressable from '../Pressable';
import toThousands from "../../utils/toThousands";

const SingleRepository = () => {
    const { id } = useParams();
    const { data } = useQuery(GET_SINGLE_REPO, { variables: { id } });

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

    if (data && data.repository) {
        return (
            <>
                <RepositoryItemContainer item={data.repository} styles={styles} />
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.unit} flexColumn>
                            <Text repoItemValue>{toThousands(data.repository.watchersCount)}</Text>
                            <Text repoItemLabel>Watchers</Text>
                        </View>
                        <View style={styles.unit} flexColumn>
                            <Text repoItemValue>{toThousands(data.repository.openIssuesCount)}</Text>
                            <Text repoItemLabel>Issues</Text>
                        </View>
                    </View>
                    <Pressable button>
                        <Text button>Open in GitHub</Text>
                    </Pressable>
                </View>
            </>
        );
    } else return null;
};

export default SingleRepository;