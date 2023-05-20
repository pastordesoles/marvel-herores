import React from 'react';
import { CachedHeroRequestsProvider } from '../proxy/CachedHeroRequestProvider';
import { marvelBaseUrl, resultsPerPage } from '../proxy/authParams';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

const HeroRequestProvider = (): JSX.Element => (
  <CachedHeroRequestsProvider
    maxResultsPerPage={resultsPerPage}
    url={marvelBaseUrl}
  >
    <HomeScreen />
  </CachedHeroRequestsProvider>
);

export default HeroRequestProvider;
