import 'set-immediate';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import renderWithProviders from '../../utils/renderWithProviders';
import LoginForm from './LoginForm';
import { type UserCredentials } from '../../hooks/useUser/types';

const mockedLoginUserFunction = jest.fn();

jest.mock('../../hooks/useUser/useUser', () => () => ({
  loginUser: mockedLoginUserFunction,
}));

describe('Given a LoginForm component', () => {
  describe('When its rendered', () => {
    test("Then it should show two inputs with the placeholders 'Email' and 'Password'", () => {
      const emailPlaceholderText = 'Email';
      const passwordPlaceholderText = 'Password';

      renderWithProviders(<LoginForm />);

      const emailPlaceholder =
        screen.getByPlaceholderText(emailPlaceholderText);
      const passwordPlaceholder = screen.getByPlaceholderText(
        passwordPlaceholderText,
      );

      expect(emailPlaceholder).toBeDefined();
      expect(passwordPlaceholder).toBeDefined();
    });
  });

  describe("When the user enters the email 'admin@gmail.com' and the password 'admin' and clicks on the log in button", () => {
    test('Then the loginUser function should be called', () => {
      const userCredentials: UserCredentials = {
        email: 'admin@gmail.com',
        password: 'admin',
        surname: '',
        userName: '',
      };

      const emailLabelText = 'Enter your email address';
      const passwordLabelText = 'Enter your password';

      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabelText);
      const passwordInput = screen.getByLabelText(passwordLabelText);
      const button = screen.getByRole('button');

      fireEvent.changeText(emailInput, userCredentials.email);
      fireEvent.changeText(passwordInput, userCredentials.password);

      fireEvent.press(button);

      expect(emailInput.props.value).toBe(userCredentials.email);
      expect(passwordInput.props.value).toBe(userCredentials.password);
      expect(mockedLoginUserFunction).toHaveBeenCalledWith(userCredentials);
    });
  });
});
