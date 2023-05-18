import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/colors';

const loginFormStyles = StyleSheet.create({
  inputContainer: {marginBottom: 14},
  input: {
    letterSpacing: 1,
    borderWidth: 1,
    borderColor: globalColors.grey,
    borderRadius: 8,
    padding: 14,
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: globalColors.light,
  },
  button: {
    backgroundColor: globalColors.accent,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: globalColors.main,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 1,
  },
  buttonDisabled: {
    backgroundColor: globalColors.accent,
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
});

export default loginFormStyles;