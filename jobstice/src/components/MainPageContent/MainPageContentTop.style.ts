import { StyleSheet, Dimensions } from 'react-native';
import { _Colors } from '../../styles/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginVertical: 30,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    // backgroundColor: 'pink',
    width: SCREEN_WIDTH * 0.8,
  },
  innerContainer: {
    width: SCREEN_WIDTH * 0.8,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkBtnActive: {
    fontSize: 20,
    fontWeight: 'bold',
    color: _Colors._SecondaryBlue,
  },
  checkBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: _Colors._Gray_4,
  },
});

export default Styles;
