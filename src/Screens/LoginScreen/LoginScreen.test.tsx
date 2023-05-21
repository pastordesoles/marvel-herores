import React from 'react';
import { screen } from '@testing-library/react-native';
import renderWithProviders from '../../utils/renderWithProviders';
import LoginScreen from './LoginScreen';

describe('Given a LoginScreen component', () => {
  describe('When its rendered', () => {
    test("Then it should show  a 'Log in' button", () => {
      const buttonText = 'Log in';

      renderWithProviders(<LoginScreen />);

      const button = screen.getByText(buttonText);

      expect(button).toBeDefined();
    });
  });
});
