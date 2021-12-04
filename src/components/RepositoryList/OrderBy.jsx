import React, { useState } from "react";
import { Modal, StyleSheet } from 'react-native';
import Constants from "expo-constants";

import View from '../View';
import Text from "../Text";
import Pressable from "../Pressable";
import theme from "../../theme";

const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 20,
        fontWeight: "500",
        padding: 10,
        textAlign: "center"
    },
    modalStyle: {
        height: 250,
        width: 250,
        backgroundColor: theme.twitterColors.darkGrey,
        justifyContent: "space-evenly"
    },
    modalContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900"
    },
    orderByButton: {
        backgroundColor: theme.twitterColors.darkGrey
    }
});

const OrderBy = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [orderBy, setOrderBy] = useState("Latest");

    const orderChoices = ["Highest Rated", "Lowest Rated", "Latest"];

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalStyle} flexColumn>
                        {orderChoices.map((orderType) =>
                            <Pressable
                                key={orderType}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setOrderBy(orderType);
                                }}
                            >
                                {({ pressed }) => (
                                    <Text style={[
                                        styles.modalText,
                                        { color: pressed ? theme.twitterColors.blue : theme.twitterColors.white }
                                    ]}>
                                        {orderType}
                                    </Text>
                                )}
                            </Pressable>
                        )}
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
                style={styles.orderByButton}
            >
                {({ pressed }) => (
                    <Text style={[
                        styles.buttonTitle,
                        { color: pressed ? theme.twitterColors.blue : "white" }
                    ]}>
                        {orderBy} &#9660;
                    </Text>
                )}
            </Pressable>
        </View>
    );
};

export default OrderBy;