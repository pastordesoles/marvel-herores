import { StyleSheet } from 'react-native';
import { typos } from '../../styles/typos';

const comicStyles = StyleSheet.create({
  comicContainer: { width: 210, marginBottom: 5 },
  comicImage: { width: '100%', height: 320, marginBottom: 8, borderRadius: 4 },
  comicTitle: { fontSize: typos.ls, textAlign: 'center', fontStyle: 'italic' },
});

export default comicStyles;
