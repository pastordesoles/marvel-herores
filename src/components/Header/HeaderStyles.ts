import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';
import { fontSizes } from '../../styles/fontSizes';

const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: globalColors.black,
  },
  title: {
    fontSize: fontSizes.xlg,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: globalColors.main,
  },
  logoutButton: {
    position: 'absolute',
    left: 20,
    top: '40%',
    backgroundColor: globalColors.main,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    right: 20,
    top: '40%',
    backgroundColor: globalColors.main,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontWeight: 'bold',
    color: globalColors.black,
  },
  image: {
    width: 100,
    height: 45,
  },
});

export default headerStyles;
