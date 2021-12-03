import { Formik } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import * as yup from 'yup';

import View from '../View';
import Pressable from "../Pressable";
import Text from "../Text";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import HideKeyboard from "../HideKeyboard";

const styles = StyleSheet.create({
    form: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: "flex-start",
      flexGrow: 1,
      flexShrink: 1,
      marginBottom: 300
    }
});

const CreateReviewSchema = yup.object().shape({
    repoOwnerUsername: yup
        .string()
        .required("Repository Owner Username is required"),
    repoName: yup
        .string()
        .required("Repository Name is required"),
    rating: yup
        .string()
        .required("Rating is required")
        // https://github.com/jquense/yup
        .test(
            'rating between 0 and 100',
            'Rating must be between 0 and 100',
            (value) => parseInt(value) >= 0 && parseInt(value) <= 100
        )
});

const initialValues = {
    repoOwnerUsername: "",
    repoName: "",
    rating: "",
    review: ""
};

const CreateReview = () => {

    const onSubmit = (todo) => console.log(todo);

    return (
        <HideKeyboard>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={CreateReviewSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <View style={styles.form}>
                            <FormikTextInput
                                name="repoOwnerUsername"
                                placeholder="Repository Owner Username"
                            />
                            <FormikTextInput
                                name="repoName"
                                placeholder="Repository Name"
                            />
                            <FormikTextInput
                                name="rating"
                                placeholder="Rating between 0 and 100"
                            />
                            <FormikTextInput
                                multiline
                                // https://reactnative.dev/docs/textinput#multiline
                                textAlignVertical
                                name="review"
                                placeholder="Review Comment"
                            />
                            <Pressable
                                mainBlueButton={theme.twitterColors.lightGrey}
                                onPress={handleSubmit}
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
                                        Create Review
                                    </Text>
                                )}
                            </Pressable>
                        </View>
                    );
                }}
            </Formik>
        </HideKeyboard>
    );
};

export default CreateReview;