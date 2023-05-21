import React from 'react';
import { View } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import { type MarvelHeroData } from '../../proxy/types';
import HeroesList from '../../components/HeroesList/HeroesList';
import { useCachedHeroRequests } from '../../proxy/CachedHeroRequestProvider';

const HomeScreen = (): JSX.Element => {
  const [state, actions] = useCachedHeroRequests();

  return (
    <View style={globalStyles.container}>
      <HeroesList
        heroesList={state.data as MarvelHeroData}
        onEndReachedAction={() => {
          if (!state.isFetching) {
            actions.paginate();
          }
        }}
        isFetching={state.isFetching}
      />
    </View>
  );
};

export default HomeScreen;
