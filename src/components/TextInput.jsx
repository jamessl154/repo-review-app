import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: "#d73a4a"
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.twitterColors.black,
    padding: 7,
    fontSize: 17
  }
});

const TextInput = ({ style, error, ...props }) => {

  // conditional adding errorBorder to styles array
  // that allows inherited styles where the last array member takes precedence
  // when error is passed as prop to this TextInput by Formik
  // console.log(error);
  const textInputStyle = [
    styles.input,
    error && styles.errorBorder,
    style
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;