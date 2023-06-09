import { StyleSheet } from 'react-native';
import { fontSizes } from '../../styles/fontSizes';
import { globalColors } from '../../styles/colors';

const comicStyles = StyleSheet.create({
  comicContainer: { width: 210, marginBottom: 5 },
  comicImage: {
    width: '100%',
    height: 320,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  comicTitle: {
    fontSize: fontSizes.ls,
    textAlign: 'left',
    color: globalColors.main,
  },
  titleContainer: {
    borderTopWidth: 8,
    borderTopColor: globalColors.accent,
    backgroundColor: globalColors.black,
    padding: 18,
    paddingBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 120,
    borderBottomRightRadius: 45,
  },
});

export default comicStyles;
