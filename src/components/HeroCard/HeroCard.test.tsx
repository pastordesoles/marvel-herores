import React from 'react';
import { screen } from '@testing-library/react-native';
import renderWithProviders from '../../utils/renderWithProviders';
import HeroCard from './HeroCard';
import { aaronStackHero } from '../../utils/mockHeroes';

describe('Given a HeroCard component', () => {
  describe('When its rendered and it receives the hero Aaron Stack', () => {
    test('Then it should show the name on the screen', () => {
      const heroName = aaronStackHero.name;

      renderWithProviders(<HeroCard hero={aaronStackHero} />);

      const renderedName = screen.getByText(heroName);

      expect(renderedName).toBeDefined();
    });

    test("Then it should show a text with '14 comic appearances'", () => {
      const availableComics = `${aaronStackHero.comics.available} comic appearances`;

      renderWithProviders(<HeroCard hero={aaronStackHero} />);

      const availableRenderedComics = screen.getByText(availableComics);

      expect(availableRenderedComics).toBeDefined();
    });
  });
});
