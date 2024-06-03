import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  Title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: _Colors._Gray_4,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: _Colors._PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 10,
  },
  buttonText: {
    color: _Colors._white,
    fontWeight: 'bold',
  },
});

export default Styles;
