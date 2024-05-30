import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  logo: {
    marginBottom: '10%',
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
  },

  button: {
    width: '80%',
    height: 40,
    backgroundColor: _Colors.PrimaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Styles;
