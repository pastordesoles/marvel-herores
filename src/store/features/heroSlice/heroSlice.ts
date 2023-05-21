import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type HeroDetailState } from './types';
import { marvelBaseUrl } from '../../../proxy/authParams';

export const initialHeroState: HeroDetailState = {
  currentHeroDetail: {
    description: '',
    id: '',
    name: '',
    comicAppearances: 0,
    thumbnail: { extension: '', path: '' },
  },
  url: '',
};

const heroSlice = createSlice({
  name: 'hero',
  initialState: initialHeroState,
  reducers: {
    loadCurrentHero: (
      currentState,
      action: PayloadAction<HeroDetailState>,
    ): HeroDetailState => ({
      ...currentState,
      currentHeroDetail: action.payload.currentHeroDetail,
      url: action.payload.url,
    }),
  },
});

export const heroReducer = heroSlice.reducer;
export const { loadCurrentHero: loadCurrentHeroActionCreator } =
  heroSlice.actions;
