import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import Comic from '../Comic/Comic';
import { globalColors } from '../../styles/colors';
import comicListStyles from './ComicsListStyles';
import { type MarvelComicData } from '../../proxy/types';
import { useCachedComicsRequests } from '../../proxy/CachedComicRequestProvider';

const ComicList = (): JSX.Element => {
  const [state, actions] = useCachedComicsRequests();

  const renderSeparator = (): JSX.Element => (
    <View style={comicListStyles.gap}></View>
  );

  if (!state.isFetching && !state.data?.length) {
    return (
      <Text style={comicListStyles.error}>
        Error loading the comics, try again.
      </Text>
    );
  }

  return (
    <>
      <FlatList
        data={state.data as MarvelComicData}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={comicListStyles.comicsList}
        keyExtractor={(item) => `${item.id}`}
        onEndReachedThreshold={0.5}
        horizontal={true}
        onEndReached={() => {
          actions.paginate();
        }}
        renderItem={({ item }) => <Comic comic={item} />}
      />
      {state.isFetching && state.data?.length && (
        <ActivityIndicator
          size={250}
          color={globalColors.black}
          style={comicListStyles.loader}
        />
      )}
    </>
  );
};

export default ComicList;
