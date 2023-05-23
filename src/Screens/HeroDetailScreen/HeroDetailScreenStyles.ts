import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';
import { fontSizes } from '../../styles/fontSizes';

const heroDetailScreenStyles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 340,
    marginTop: 20,
    marginBottom: 10,
  },
  image: { width: '100%', height: '100%', borderRadius: 4 },
  heroName: { fontWeight: 'bold', fontSize: fontSizes.xlg, marginBottom: 10 },
  description: {
    fontSize: fontSizes.ls,
    letterSpacing: 0.75,
    marginBottom: 20,
  },
  noDescription: {
    fontSize: fontSizes.xs,
    fontStyle: 'italic',
    letterSpacing: 0.75,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  comicsTitle: {
    fontSize: fontSizes.md,
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
