import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './CalendarContent.style';
import { FlatList } from 'react-native-gesture-handler';

interface CalendarData {
  _id: string;
  calendarTitle: string;
  calendarContent: string;
  calendarDate: string;
}

interface CalendarContentProps {
  date: string;
  calendarData: CalendarData[];
}

const CalendarContent = ({ date, calendarData }: CalendarContentProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        calendarTitle: title,
        calendarContent: category,
        calendarDate: date,
      };

      const res = await axios.post('http://localhost:3000/calendar', payload);
      setModalVisible(false);
      setTitle('');
      setCategory('');
      // getCalendar(); // 새 데이터 가져오기
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const getCalendar = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:3000/calendar');
  //     console.log('>>>>데이터가져옴', res.data);
  //     setCalendarData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getCalendar();
  // }, []);

  console.log('calendarData>>>', calendarData);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dateText}>{date}</Text>
          {date && (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.addButton}>+</Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={calendarData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.calendarTitle}</Text>
              <Text>{item.calendarContent}</Text>
            </View>
          )}
          ListEmptyComponent={<Text>No data available</Text>} // 추가: 데이터가 없을 때 표시
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>제목</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
              <Text>카테고리</Text>
              <TextInput
                style={styles.input}
                value={category}
                onChangeText={(text) => setCategory(text)}
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>등록하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default CalendarContent;
