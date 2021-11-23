import React from 'react';
import { Formik } from 'formik';
import View from './View';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    padding: 15,
    flexDirection: 'column',
    justifyContent: "space-evenly",
    height: 200
  },
  pressable: {
    backgroundColor: theme.twitterColors.blue,
    borderRadius: 5,
  },
  button: {
    padding: 7,
    fontSize: 17,
    color: theme.twitterColors.white,
    textAlign: "center"
  }
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: "",
  password: ""
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
            <Pressable style={styles.pressable} onPress={handleSubmit}>
              <Text style={styles.button}>Sign In</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;