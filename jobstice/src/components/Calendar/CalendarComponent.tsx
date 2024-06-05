import React, { useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { styles } from './CalendarContent.style';
import CalendarContent from './CalendarContent';

const CalendarComponent = () => {
  const [selected, setSelected] = useState<string>('');
  const [calendarData, setCalendarData] = useState<any>([]); // 받아온 데이터를 저장할 상태

  const getCalendarData = async (date: string) => {
    console.log(date);
    try {
      const res = await axios.get(`http://localhost:3000/calendar/${date}`);
      console.log('resdata', res.data);

      setCalendarData([res.data]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDayPress = (day: any) => {
    const monthDay = day.dateString.substring(5);
    const [month, dayOfMonth] = monthDay.split('-');
    const formattedDate = `${month}월 ${dayOfMonth}일 계획`;
    setSelected(day.dateString); // 선택된 날짜를 업데이트
    getCalendarData(day.dateString); // 선택된 날짜로 데이터 요청
  };

  return (
    <View style={styles.container}>
      <CalendarList
        hideArrows={false}
        hideExtraDays={true}
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#70d7c7',
            selectedTextColor: 'black',
          },
          '2024-05-15': { marked: true, dotColor: '#50cebb' },
          '2024-05-16': { marked: true, dotColor: '#50cebb' },
          '2024-05-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2024-05-22': { color: '#70d7c7', textColor: 'white' },
          '2024-05-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2024-05-24': { color: '#70d7c7', textColor: 'white' },
          '2024-05-25': {
            endingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
        }}
        pastScrollRange={12}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={false}
        current={'2024-05-01'}
        horizontal={true}
        pagingEnabled={true}
      />

      <Text>
        {' '}
        {selected && (
          <CalendarContent date={selected} calendarData={calendarData} />
        )}
      </Text>
    </View>
  );
};

export default CalendarComponent;
