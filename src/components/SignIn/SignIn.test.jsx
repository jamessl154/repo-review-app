import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInContainer } from './index';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

      const onSubmit = jest.fn();

      const r = render(<SignInContainer signIn={onSubmit} />);

      fireEvent.changeText(r.getByTestId('usernameField'), 'Kalle');
      fireEvent.changeText(r.getByTestId('passwordField'), 'password');
      fireEvent.press(r.getByTestId('submitButton'));

      // Formik form submissions are asynchronous so must wait
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'Kalle',
          password: 'password',
        });
      });

    });
  });
});