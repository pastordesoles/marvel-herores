import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';

const heroCardStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: globalColors.black,
  },
  imageContainer: { width: '100%', height: 330 },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  infoContainer: {
    padding: 12,
    paddingBottom: 20,
    alignItems: 'center',
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
    textAlign: 'center',
    color: globalColors.main,
  },
});

export default heroCardStyles;
