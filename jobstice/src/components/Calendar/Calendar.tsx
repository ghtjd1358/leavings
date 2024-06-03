import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native';
import {
  CalendarList,
  CalendarListProps,
  LocaleConfig,
} from 'react-native-calendars';
import CalendarModal from './CalendarModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarContent from './CalendarContent';

type CustomTheme = CalendarListProps['theme'] & {
  'stylesheet.calendar.header': {
    dayTextAtIndex0: {
      color: string;
    };
    dayTextAtIndex6: {
      color: string;
    };
  };
};

const customTheme: CustomTheme = {
  'stylesheet.calendar.header': {
    dayTextAtIndex0: {
      color: 'red',
    },
    dayTextAtIndex6: {
      color: 'blue',
    },
  },
};

// 화면 너비를 가져오기 위해 Dimensions 사용
const { width } = Dimensions.get('window');

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarListComponent = () => {
  const [selected, setSelected] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalContent, setModalContent] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}월${today.getDate().toString().padStart(2, '0')}일`;
    setCurrentDate(formattedDate);
  }, []);

  const Content = ({ date }) => {
    return (
      <View>
        <Text> {date} 계획</Text>
      </View>
    );
  };

  console.log(selected);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}></Text>

        <CalendarList
          theme={customTheme}
          hideArrows={false}
          hideExtraDays={true} // 이전 다음달 날짜 삭제
          style={styles.calendar}
          onDayPress={(day) => {
            const monthDay = day.dateString.substring(5); // "YYYY-MM-DD"에서 "MM-DD" 부분만 추출
            const [month, dayOfMonth] = monthDay.split('-'); // "MM-DD"를 "MM"과 "DD"로 분리
            const formattedDate = `${month}월 ${dayOfMonth}일 계획`; // 원하는 형식으로 조합
            setSelected(formattedDate);
            console.log(formattedDate);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#70d7c7',
              selectedTextColor: '#black',
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
          pastScrollRange={12} // 과거 12개월 표시
          futureScrollRange={12} // 미래 12개월 표시
          scrollEnabled={true} // 스크롤 가능 여부
          showScrollIndicator={false} // 스크롤 인디케이터 표시 여부
          current={'2024-05-01'} // 표시될 초기 날짜 설정,Date로 현재 날짜 넣어야함
          horizontal={true} // 수평 스크롤 활성화
          pagingEnabled={true} // 페이지 단위 스크롤
        />

        <View style={styles.calendar_content}>
          <CalendarContent date={selected} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
  },
  header: {
    marginBottom: 30,
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  },
  calendar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    width: width,
    overflow: 'hidden',
  },
  calendar_content: {
    width: '100%',
  },
});

export default CalendarListComponent;
