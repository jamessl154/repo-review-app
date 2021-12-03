import React from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";

import View from "../View";
import FormikTextInput from "../FormikTextInput";
import Pressable from "../Pressable";
import Text from "../Text";
import theme from "../../theme";

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

const SignUp = () => {

    const onSubmit = (todo) => console.log(todo);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
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
    );
};

export default SignUp;