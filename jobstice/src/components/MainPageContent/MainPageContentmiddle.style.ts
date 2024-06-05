import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: _Colors._Gray_2,
    // width: '100%',
    height: 50,
    marginVertical: 20,
  },
  dayText: {
    fontSize: 16,
  },
  todoContainer: {
    // backgroundColor: 'pink',
    marginBottom: 30,
  },
  todoContent: {
    backgroundColor: _Colors._Gray_2,
    marginHorizontal: 20,
    marginBottom: 10,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: _Colors._Gray_4,
  },
});

export default Styles;
