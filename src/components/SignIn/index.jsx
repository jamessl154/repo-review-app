import React from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import View from '../View';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import Pressable from '../Pressable';
import theme from '../../theme';
import useSignIn from '../../hooks/useSignIn';

const styles = StyleSheet.create({
  form: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: "flex-start",
    flexGrow: 1,
    flexShrink: 1
  }
});

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username too short")
    .max(50, "Username too long")
    .required('Username is required'),
  password: yup
    .string()
    .min(2, "Password too short")
    .max(50, "Password too long")
    .required('Password is required')
});

const initialValues = {
  username: "",
  password: ""
};

export const SignInContainer = ({ signIn }) => {

  const onSubmit = (loginDetails) => {
    signIn(loginDetails);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignInSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              testID="usernameField"
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              testID="passwordField"
              secureTextEntry
            />
            <Pressable
              mainBlueButton={theme.twitterColors.lightGrey}
              onPress={handleSubmit}
              testID="submitButton"
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
                  Sign In
                </Text>
              )}
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  return <SignInContainer signIn={signIn} />;
};

export default SignIn;