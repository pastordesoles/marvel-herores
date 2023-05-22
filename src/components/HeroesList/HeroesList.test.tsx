import React from 'react';
import { screen } from '@testing-library/react-native';
import renderWithProviders from '../../utils/renderWithProviders';
import HeroesList from './HeroesList';
import { mockHeroes } from '../../utils/mockHeroes';

describe('Given a HeroesList component', () => {
  describe('When its rendered with a list of heroes', () => {
    test('Then it should show the received on the screen', () => {
      const heroCardTestId = 'heroData';
      const numberOfCards = mockHeroes.length;

      renderWithProviders(
        <HeroesList
          heroesList={mockHeroes}
          onEndReachedAction={() => 'void'}
          isFetching={false}
        />,
      );

      const expectedHeroCards = screen.queryAllByTestId(heroCardTestId);

      expect(expectedHeroCards).toHaveLength(numberOfCards);
    });
  });
});
