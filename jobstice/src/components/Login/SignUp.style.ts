import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const SignUpStyles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
  },

  SignUpText: {
    fontWeight: 'bold',
    color: '#000',
    paddingRight: 10,
  },

  SignUpText2: {
    fontWeight: 'bold',
    color: _Colors.PrimaryBlue,
  },
});

export default SignUpStyles;
