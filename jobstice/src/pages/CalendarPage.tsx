import { View, Text } from 'react-native';
import CalendarComponent from '../components/Calendar/Calendar';

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
