import { StyleSheet } from 'react-native';
import { typos } from '../../styles/typos';

const comicListStyles = StyleSheet.create({
  comicsList: { paddingBottom: 20 },
  gap: { width: 20 },
  loader: { position: 'absolute', top: -10, right: 10 },
  error: { fontSize: typos.xs },
});

export default comicListStyles;
