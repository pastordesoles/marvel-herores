import React from 'react';
import HeroDetailScreen from '../Screens/HeroDetailScreen/HeroDetailScreen';
import { CachedComicsRequestsProvider } from '../proxy/CachedComicRequestProvider';
import { resultsPerPage } from '../proxy/authParams';
import { useAppSelector } from '../store/hooks';

const ComicsRequestProvider = (): JSX.Element => {
  const { url } = useAppSelector((state) => state.hero);

  return (
    <CachedComicsRequestsProvider maxResultsPerPage={resultsPerPage} url={url}>
      <HeroDetailScreen />
    </CachedComicsRequestsProvider>
  );
};

export default ComicsRequestProvider;
