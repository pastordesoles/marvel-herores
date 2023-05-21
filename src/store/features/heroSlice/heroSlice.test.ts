import {
  heroReducer,
  initialHeroState,
  loadCurrentHeroActionCreator,
} from './heroSlice';
import { type HeroStructure, type HeroDetailState } from './types';

describe('Given a heroReducer reducer', () => {
  const currentHeroState: HeroDetailState = { ...initialHeroState };

  describe('When it receives the current state a loadCurrentHero action', () => {
    test('Then it should return a new state with the received hero and url', () => {
      const newUrl = 'admin.com/admins';
      const currentHero: HeroStructure = {
        description: 'Admin doing admin things',
        id: '1234',
        name: 'Admin',
        comicAppearances: 1,
        thumbnail: { extension: 'jpg', path: 'admin' },
      };

      const expectedNewState: HeroDetailState = {
        url: newUrl,
        currentHeroDetail: currentHero,
      };

      const loadCurrentHeroAction = loadCurrentHeroActionCreator({
        url: newUrl,
        currentHeroDetail: currentHero,
      });
      const newState = heroReducer(currentHeroState, loadCurrentHeroAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
