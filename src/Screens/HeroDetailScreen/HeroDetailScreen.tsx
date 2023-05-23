import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import heroDetailScreenStyles from './HeroDetailScreenStyles';
import globalStyles from '../../styles/globalStyles';
import ComicList from '../../components/ComicsList/ComicsList';
import { useAppSelector } from '../../store/hooks';

const HeroDetailScreen = (): JSX.Element => {
  const { description, name, thumbnail, comicAppearances } = useAppSelector(
    (state) => state.hero.currentHeroDetail,
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={globalStyles.container}
    >
      <View style={heroDetailScreenStyles.imageContainer}>
        <Image
          source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }}
          resizeMode="cover"
          style={heroDetailScreenStyles.image}
          accessibilityLabel={`${name} image`}
        />
      </View>
      <Text style={heroDetailScreenStyles.heroName}>{name}</Text>

      {description ? (
        <Text style={heroDetailScreenStyles.description}>{description}</Text>
      ) : (
        <Text style={heroDetailScreenStyles.blankDescription}>
          Our agents are still gathering information about this hero.
        </Text>
      )}

      <View style={heroDetailScreenStyles.comicsSection}>
        <View style={heroDetailScreenStyles.comicsTitleContainer}>
          <Text style={heroDetailScreenStyles.comicsTitle}>COMICS</Text>
        </View>

        {comicAppearances === 0 ? (
          <Text style={heroDetailScreenStyles.blankDescription}>
            No comic appearances
          </Text>
        ) : (
          <ComicList />
        )}
      </View>
    </ScrollView>
  );
};

export default HeroDetailScreen;
