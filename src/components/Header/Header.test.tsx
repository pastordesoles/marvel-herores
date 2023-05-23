import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn().mockReturnValue('home'),
  useNavigation: jest.fn(),
}));

describe('Given a Header component', () => {
  describe('When its rendered', () => {
    test("Then it should show an image with the test id 'HEROES'", () => {
      const titleText = 'HEROES';

      render(
        <Provider store={store}>
          <Header />
        </Provider>,
      );

      const title = screen.getByTestId(titleText);

      expect(title).toBeDefined();
    });
  });
});
