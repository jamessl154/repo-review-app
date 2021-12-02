import React from "react";
import { StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import { RepositoryItemContainer } from '../RepositoryList/RepositoryItem';
import { GET_SINGLE_REPO } from '../../graphql/queries';
import View from '../View';
import Text from "../Text";

const SingleRepository = () => {
    const { id } = useParams();
    const { data } = useQuery(GET_SINGLE_REPO, { variables: { id } });

    const styles = StyleSheet.create({
        container: {
            padding: 10,
        }
    });

    if (data && data.repository) {
        return (
            <>
                <RepositoryItemContainer item={data.repository} styles={styles} />
                <View style={{ height: 500, width: 500, backgroundColor: "white" }}>
                    <Text>Test 123</Text>
                </View>
            </>
        );
    } else return null;
};

export default SingleRepository;