import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/colors';

const loginFormStyles = StyleSheet.create({
  inputContainer: { marginBottom: 14 },
  input: {
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: globalColors.grey,
    borderRadius: 4,
    padding: 14,
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: globalColors.light,
  },
  button: {
    backgroundColor: globalColors.accent,
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: globalColors.main,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 1,
  },
  buttonDisabled: {
    backgroundColor: globalColors.accentLight,
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: globalColors.main,
    borderRadius: 4,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: globalColors.accent,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default loginFormStyles;
