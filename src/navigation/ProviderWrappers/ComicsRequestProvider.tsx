import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { CachedComicsRequestsProvider } from '../../proxy/CachedComicRequestProvider';
import HeroDetailScreen from '../../Screens/HeroDetailScreen/HeroDetailScreen';
import { resultsPerPage } from '../../proxy/authParams';

const ComicsRequestProvider = (): JSX.Element => {
  const { url } = useAppSelector((state) => state.hero);

  return (
    <CachedComicsRequestsProvider maxResultsPerPage={resultsPerPage} url={url}>
      <HeroDetailScreen />
    </CachedComicsRequestsProvider>
  );
};

export default ComicsRequestProvider;
