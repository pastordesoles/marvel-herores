import React from 'react';
import { screen } from '@testing-library/react-native';
import renderWithProviders from '../../utils/renderWithProviders';
import HeroDetailScreen from './HeroDetailScreen';
import { type HeroStructure } from '../../store/features/heroSlice/types';

describe('Given a HeroDetailScreen component', () => {
  describe('When its rendered', () => {
    test('Then it should show the name of the current hero and its image.', () => {
      const currentMockHero: HeroStructure = {
        description: 'Admin gonna admin',
        id: '1',
        name: 'Admin McAdmin',
        comicAppearances: 1,
        thumbnail: { extension: 'jpg', path: 'admin' },
      };

      renderWithProviders(<HeroDetailScreen />, {
        hero: { currentHeroDetail: currentMockHero, url: 'url' },
      });

      const heroName = screen.getByText(currentMockHero.name);
      const heroImage = screen.getByLabelText(`${currentMockHero.name} image`);

      expect(heroName).toBeDefined();
      expect(heroImage).toBeDefined();
    });
  });

  describe('When its rendered with a blank description and no comic appearances', () => {
    test('Then it should show the messages for no available data.', () => {
      const expectedDescriptionText =
        'Our agents are still gathering information about this hero.';
      const expectedComicText = 'No comic appearances';

      const incompleteMockHero: HeroStructure = {
        description: '',
        id: '1',
        name: 'Admin McAdmin',
        comicAppearances: 0,
        thumbnail: { extension: 'jpg', path: 'admin' },
      };

      renderWithProviders(<HeroDetailScreen />, {
        hero: { currentHeroDetail: incompleteMockHero, url: 'url' },
      });

      const emptyDescription = screen.getByText(expectedDescriptionText);
      const noComicAppearances = screen.getByText(expectedComicText);

      expect(emptyDescription).toBeDefined();
      expect(noComicAppearances).toBeDefined();
    });
  });
});
