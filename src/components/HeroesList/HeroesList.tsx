import React, { useRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import HeroCard from '../HeroCard/HeroCard';
import heroesListStyles from './HeroesListStyles';
import { globalColors } from '../../styles/colors';
import { type MarvelHero, type MarvelHeroData } from '../../proxy/types';
import globalStyles from '../../styles/globalStyles';

interface HeroesListProps {
  onEndReachedAction: () => void;
  heroesList: MarvelHeroData;
  isFetching: boolean;
}

const renderSeparator = () => <View style={heroesListStyles.gap}></View>;

const HeroesList = ({
  heroesList,
  onEndReachedAction,
  isFetching,
}: HeroesListProps): JSX.Element => {
  const heroesListRef = useRef<FlatList<MarvelHero>>(null);

  const resetScroll = () => {
    heroesListRef.current!.scrollToOffset({ animated: true, offset: 0 });
  };

  if (!heroesList?.length && !isFetching) {
    return (
      <Text style={heroesListStyles.errorText}>
        There was an error loading the heroes
      </Text>
    );
  }

  if (isFetching && !heroesList?.length) {
    return (
      <View style={globalStyles.container}>
        <View style={heroesListStyles.contentContainer}>
          <ActivityIndicator
            size={100}
            color={globalColors.accent}
            style={heroesListStyles.loader}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={heroesListStyles.scrollButton}
        activeOpacity={0.4}
        onPress={resetScroll}
      >
        <View style={heroesListStyles.arrow} />
      </TouchableOpacity>
      <FlatList
        data={heroesList}
        renderItem={({ item }) => <HeroCard hero={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        onEndReached={onEndReachedAction}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={heroesListStyles.list}
        ref={heroesListRef}
        scrollEnabled={!isFetching}
      />
      {isFetching && heroesList?.length && (
        <ActivityIndicator
          size="large"
          color={globalColors.accent}
          style={heroesListStyles.loader}
        />
      )}
    </View>
  );
};

export default HeroesList;
