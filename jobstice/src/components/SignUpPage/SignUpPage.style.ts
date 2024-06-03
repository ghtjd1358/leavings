import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  Title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContianer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    color: _Colors._Gray_8,
    marginBottom: 5,
    marginLeft: 3,
    marginRight: 5,
    fontWeight: 'bold',
  },
  checkDesc: {
    color: _Colors._PrimaryBlue,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginHorizontal: 1,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: _Colors._Gray_4,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputFocused: {
    width: '100%',
    height: 40,
    borderColor: _Colors._SecondaryBlue,
    borderWidth: 1.5,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: _Colors._Gray_3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 10,
  },
  activeButton: {
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
  stepContainer: {
    // backgroundColor: 'pink',
    width: '25%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Circle_Active: {
    backgroundColor: _Colors._PrimaryBlue,
    overflow: 'hidden',
    width: 30,
    borderRadius: 7,
  },
  Circle_Default: {
    backgroundColor: _Colors._Gray_3,
    overflow: 'hidden',
    width: 15,
    borderRadius: 7,
  },
});

export default Styles;
