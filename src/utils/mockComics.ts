import { type MarvelComicData, type MarvelComic } from '../proxy/types';

export const mockComicOne: MarvelComic = {
  id: 1,
  thumbnail: {
    extension: 'extension one',
    path: 'path one',
  },
  title: 'Comic One',
};

export const mockComicTwo: MarvelComic = {
  id: 2,
  thumbnail: {
    extension: 'extension two',
    path: 'path two',
  },
  title: 'Comic Two',
};

export const mockComics: MarvelComicData = [mockComicOne, mockComicTwo];
