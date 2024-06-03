import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarContent = ({ date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{date}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    width: '100%',
  },
});

export default CalendarContent;
