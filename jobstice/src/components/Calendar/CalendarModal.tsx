//rnfc

import { View, Text, StyleSheet } from 'react-native';

const CalendarModal = () => {
  return (
    <View style={styles.container}>
      <Text>모달창</Text>ㅅ
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});

export default CalendarModal;
