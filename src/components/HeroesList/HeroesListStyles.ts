import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';

const heroesListStyles = StyleSheet.create({
  gap: { height: 40 },
  list: { paddingTop: 20, paddingBottom: 20 },
  errorText: { fontSize: 20, alignSelf: 'center', letterSpacing: 0.75 },
  contentContainer: {
    justifyContent: 'center',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
    borderRadius: 50,
    bottom: 50,
    top: 50,
    left: 50,
    right: 50,
  },
  scrollButton: {
    height: 50,
    width: 50,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: globalColors.accent,
    borderRadius: 4,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: 'white',
  },
});

export default heroesListStyles;
