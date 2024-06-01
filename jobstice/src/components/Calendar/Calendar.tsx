import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <CalendarList
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
            dayTextAtIndex6: {
              color: 'blue',
            },
          },
        }}
        hideArrows={false}
        hideExtraDays={true} // 이전 다음달 날짜 삭제
        style={styles.calendar}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markingType={'period'}
        markedDates={{
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default CalendarListComponent;
