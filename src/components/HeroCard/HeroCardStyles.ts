import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';

const heroCardStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderBottomRightRadius: 45,
    backgroundColor: globalColors.black,
  },
  imageContainer: { width: '100%', height: 335 },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  infoContainer: {
    borderTopWidth: 8,
    borderTopColor: globalColors.accent,
    padding: 18,
    paddingBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: globalColors.main,
  },
  secondaryText: {
    fontSize: 18,
    marginBottom: 18,
    textAlign: 'center',
    color: globalColors.main,
  },
});

export default heroCardStyles;
