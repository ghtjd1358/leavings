import { View, Text } from 'react-native';
import CalendarComponent from '../components/Calendar/CalendarComponent';

function CalendarPage() {
  return (
    <>
      <View>
        <Text>
          <CalendarComponent />
        </Text>
      </View>
    </>
  );
}

export default CalendarPage;
