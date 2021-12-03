import React from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import * as yup from 'yup';

import View from "../View";
import FormikTextInput from "../FormikTextInput";
import Pressable from "../Pressable";
import Text from "../Text";
import theme from "../../theme";
import HideKeyboard from '../HideKeyboard';
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const styles = StyleSheet.create({
    form: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: "flex-start",
      flexGrow: 1,
      flexShrink: 1
    }
});

const initialValues = {
    username: "",
    password: "",
    confirmation: ""
};

const SignUpSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .max(30, "Username is too long"),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password is too short")
        .max(50, "Password is too long"),
    confirmation: yup
        .string()
        // https://github.com/formium/formik/issues/90
        .oneOf([yup.ref('password'), null], "Confirmation does not match password")
        .required("Confirmation password is required")
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (loginDetails) => {
        await signUp(loginDetails);
        // if no error in sign up we can proceed with signing in
        // with the same loginDetails
        await signIn(loginDetails);
    };

    return (
        <HideKeyboard>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={SignUpSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <View style={styles.form}>
                            <FormikTextInput
                                name="username"
                                placeholder="Username"
                            />
                            <FormikTextInput
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                            />
                            <FormikTextInput
                                name="confirmation"
                                placeholder="Confirm Password"
                                secureTextEntry
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
                                        Sign Up
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

export default SignUp;