import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function NavHome() {
  return (
    <>
      <TouchableOpacity>
        <View>
          <Entypo name="home" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default NavHome;
