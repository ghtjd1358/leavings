import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { styles } from './CalendarContent.style';
import CalendarContent from './CalendarContent';

const CalendarComponent = () => {
  const [selected, setSelected] = useState<string>(''); // 선택된 날짜를 저장할 상태
  const [calendarData, setCalendarData] = useState<any>([]); // 받아온 데이터를 저장할 상태

  const getCalendarData = async (date: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/calendar/${date}`);

      setCalendarData(res.data); // 배열을 배열로 다시 감싸지 않도록 수정
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (selected) {
    getCalendarData(selected);12
  }

  const handleDayPress = (day: any) => {
    setSelected(day.dateString); // 선택된 날짜를 업데이트
  };

  return (
    <View style={styles.container}>
      <CalendarList
        hideArrows={false}
        hideExtraDays={true}
        style={styles.calendar}
        onDayPress={handleDayPress}
        pastScrollRange={12}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={false}
        current={'2024-05-01'}
        horizontal={true}
        pagingEnabled={true}
      />

      {selected && (
        <CalendarContent
          date={selected}
          calendarData={calendarData}
          setCalendarData={setCalendarData}
        />
      )}
    </View>
  );
};

export default CalendarComponent;
