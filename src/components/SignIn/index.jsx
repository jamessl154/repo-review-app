import React from 'react';
import { Formik } from 'formik';
import View from '../View';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import { Pressable, StyleSheet } from 'react-native';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';

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

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
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