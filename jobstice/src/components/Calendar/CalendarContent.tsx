import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { styles } from './CalendarContent.style';

const CalendarContent = ({ date }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarTitle, setCalendarTitle] = useState('');
  const [calendarContent, setCalendarContent] = useState('');
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    fetchCalendars();
  }, []);

  const fetchCalendars = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/calendar/`);
      console.log(response);
      setCalendars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/calendar', {
        // user_id: 'test1', // 테스트용 사용자 ID
        calendarTitle,
        calendarContent,
        calendarDate: date,
      });
      console.log('Response:', response.data);
      setModalVisible(false);
      fetchCalendars(); // 새 항목을 생성한 후 캘린더 목록을 다시 가져옴
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dateText}>{date}</Text>
        {date && (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={calendarTitle}
              onChangeText={setCalendarTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Content"
              value={calendarContent}
              onChangeText={setCalendarContent}
            />
            <Button title="등록하기" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={calendars}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.calendarTitle}</Text>
            <Text>{item.calendarContent}</Text>
            <Text>{item.calendarDate}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CalendarContent;
