import React from 'react';
import { Image, Text, View } from 'react-native';
import comicStyles from './ComicStyles';
import { type MarvelComic } from '../../proxy/types';

interface ComicProps {
  comic: MarvelComic;
}

const Comic = ({ comic }: ComicProps): JSX.Element => (
  <View style={comicStyles.comicContainer}>
    <Image
      source={{
        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      }}
      style={comicStyles.comicImage}
      accessibilityLabel={`${comic.title} comic cover image`}
    />
    <Text style={comicStyles.comicTitle}>{comic.title}</Text>
  </View>
);

export default Comic;
