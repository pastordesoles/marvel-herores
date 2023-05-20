import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';

const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: globalColors.main,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: globalColors.accent,
  },
  logoutButton: {
    position: 'absolute',
    left: 20,
    top: '40%',
    backgroundColor: globalColors.black,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontWeight: 'bold',
    color: globalColors.main,
  },
});

export default headerStyles;