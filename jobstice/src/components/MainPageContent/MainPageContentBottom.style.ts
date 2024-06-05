import { StyleSheet, Dimensions } from 'react-native';
import { _Colors } from '../../styles/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    color: _Colors._Gray_4,
  },
  arrowText: {
    color: _Colors._Gray_6,
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    marginVertical: 20,
    // backgroundColor: 'pink',
    width: SCREEN_WIDTH * 0.9,
    marginHorizontal: 20,
  },
  logo: {},
  contentContainer: {
    width: 100,
    height: 120,
    paddingTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: _Colors._Gray_3,
    borderWidth: 1,
  },
  contentBox: {
    backgroundColor: _Colors._Gray_3,
    alignItems: 'center',
    width: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  content: {
    color: _Colors._Gray_6,
  },
});

export default Styles;
