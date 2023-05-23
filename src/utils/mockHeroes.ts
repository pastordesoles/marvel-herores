import { type MarvelHeroData, type MarvelHero } from '../proxy/types';

export const aaronStackHero: MarvelHero = {
  id: 1010699,
  name: 'Aaron Stack',
  description: '',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
    extension: 'jpg',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
  comics: {
    available: 14,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1010699/comics',
  },
};

const abominationHero: MarvelHero = {
  id: 1016823,
  name: 'Abomination (Ultimate)',
  description: '',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
    extension: 'jpg',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016823',
  comics: {
    available: 2,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1016823/comics',
  },
};

export const mockHeroes: MarvelHeroData = [aaronStackHero, abominationHero];
