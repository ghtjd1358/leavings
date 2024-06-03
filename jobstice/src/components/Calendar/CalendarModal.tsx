//rnfc

import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const CalendarModal = () => {
  return (
    <View style={styles.container}>
      <Text>제목</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>카테고리</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>시간</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'skyblue',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default CalendarModal;
