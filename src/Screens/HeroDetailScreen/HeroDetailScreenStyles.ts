import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';
import { typos } from '../../styles/typos';

const heroDetailScreenStyles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 340,
    marginTop: 20,
    marginBottom: 10,
  },
  image: { width: '100%', height: '100%', borderRadius: 4 },
  heroName: { fontWeight: 'bold', fontSize: typos.xlg, marginBottom: 10 },
  description: { fontSize: typos.ls, letterSpacing: 0.75, marginBottom: 20 },
  noDescription: {
    fontSize: typos.xs,
    fontStyle: 'italic',
    letterSpacing: 0.75,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  comicsTitle: {
    fontSize: typos.md,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  comicsTitleContainer: {
    width: '100%',
    borderBottomWidth: 5,
    borderBottomColor: globalColors.accent,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  comicsSection: { alignItems: 'center', justifyContent: 'center' },
});

export default heroDetailScreenStyles;
