import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    color: "#d73a4a",
    marginBottom: 15
  },
  spaceBetween: {
    marginBottom: 15
  },
  textAlignVertical: {
    textAlignVertical: 'top'
  }
});

const FormikTextInput = ({ name, textAlignVertical, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const formikTextInputStyles = [
    textAlignVertical && styles.textAlignVertical,
    styles.spaceBetween,
    style
  ];

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={formikTextInputStyles}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;