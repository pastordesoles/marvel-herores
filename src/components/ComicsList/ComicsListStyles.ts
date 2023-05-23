import { StyleSheet } from 'react-native';
import { fontSizes } from '../../styles/fontSizes';

const comicListStyles = StyleSheet.create({
  comicsList: { paddingBottom: 20 },
  gap: { width: 25 },
  loader: { position: 'absolute', top: 100 },
  error: { fontSize: fontSizes.xs },
});

export default comicListStyles;
