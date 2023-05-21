export interface HeroStructure {
  id: string;
  name: string;
  description: string;
  comicAppearances: number;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface HeroDetailState {
  currentHeroDetail: HeroStructure;
  url: string;
}
