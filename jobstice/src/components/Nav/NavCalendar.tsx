import { View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

function NavCalendar({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Entypo name="calendar" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}

export default NavCalendar;
