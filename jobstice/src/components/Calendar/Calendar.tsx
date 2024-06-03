import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import CalendarContent from './CalendarContent';

type CustomTheme = {
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
  const [currentDate, setCurrentDate] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>캘린더</Text>
      <CalendarList
        theme={customTheme}
        hideArrows={false}
        hideExtraDays={true}
        style={styles.calendar}
        onDayPress={(day) => {
          const monthDay = day.dateString.substring(5);
          const [month, dayOfMonth] = monthDay.split('-');
          const formattedDate = `${month}월 ${dayOfMonth}일 계획`;
          setSelected(formattedDate);
        }}
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

      {selected && <CalendarContent date={selected} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  },
  calendar: {
    width: width,
    overflow: 'hidden',
  },
});

export default CalendarListComponent;
