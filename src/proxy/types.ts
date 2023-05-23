export type MarvelHeroesListResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelHeroData;
  };
};

export type MarvelHeroComicsListResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelComicData;
  };
};

export type MarvelResponse =
  | MarvelHeroesListResponse
  | MarvelHeroComicsListResponse;

export type MarvelHero = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
  };
};

export type MarvelComic = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type MarvelHeroData = MarvelHero[];

export type MarvelComicData = MarvelComic[];

export type MarvelData = MarvelHeroData | MarvelComicData;
