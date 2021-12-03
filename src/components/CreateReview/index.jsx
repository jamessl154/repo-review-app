import { Formik } from "formik";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import * as yup from 'yup';

import View from '../View';
import Pressable from "../Pressable";
import Text from "../Text";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import HideKeyboard from "../HideKeyboard";
import useCreateReview from "../../hooks/useCreateReview";

const styles = StyleSheet.create({
    form: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: "flex-start",
      flexGrow: 1,
      flexShrink: 1
    },
    errorNotification: {
        marginBottom: 300,
        paddingHorizontal: 15
    },
    errorText: {
        color: "#d73a4a",
        fontSize: 15,
        textAlign: "center"
    }
});

const CreateReviewSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Repository Owner Username is required"),
    repositoryName: yup
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
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: ""
};

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const [error, setError] = React.useState(null);
    const timeoutID = useRef(null);

    const onSubmit = async ({ ownerName, rating, repositoryName, text }) => {
        const errorMessage = await createReview({ repositoryName, ownerName, rating: parseInt(rating), text });

        // The return value of createReview is an error message if the operation was unsuccessful,
        // store the error in state. use a useRef to store the timeoutID and clear the previous setTimeout.
        // This prevents reclearing if the button is pressed more than once in 5 seconds
        if (errorMessage) {
            if (timeoutID.current) clearTimeout(timeoutID.current);
            setError(errorMessage);
            timeoutID.current = setTimeout(() => setError(null), 5000);
        }
    };

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
                                name="ownerName"
                                placeholder="Repository Owner Username"
                                autoCapitalize='none'
                            />
                            <FormikTextInput
                                name="repositoryName"
                                placeholder="Repository Name"
                                autoCapitalize='none'
                            />
                            <FormikTextInput
                                name="rating"
                                placeholder="Rating between 0 and 100"
                            />
                            <FormikTextInput
                                multiline
                                // https://reactnative.dev/docs/textinput#multiline
                                textAlignVertical
                                name="text"
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
            <View style={styles.errorNotification}>
                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>
        </HideKeyboard>
    );
};

export default CreateReview;