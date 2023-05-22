import { StyleSheet } from 'react-native';
import { typos } from '../../styles/typos';

const comicListStyles = StyleSheet.create({
  comicsList: { paddingBottom: 20 },
  gap: { width: 25 },
  loader: { position: 'absolute', top: 100 },
  error: { fontSize: typos.xs },
});

export default comicListStyles;
