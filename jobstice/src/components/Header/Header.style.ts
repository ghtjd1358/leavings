import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    height: 40,
    paddingHorizontal: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 50,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  headerBtn: {
    color: _Colors._PrimaryBlue,
    fontSize: 18,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
});

export default Styles;
