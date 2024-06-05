import { Text, View, Button, TouchableOpacity } from 'react-native';
import Styles from './Header.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Header({ navigation }: any) {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>JOBSTICE</Text>
      {/* 테스트용 */}
      <View style={Styles.icons}>
        <View style={Styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AntDesign name="login" style={Styles.headerBtn} />
          </TouchableOpacity>
        </View>
        <View style={Styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Test')}>
            <MaterialCommunityIcons
              name="ab-testing"
              style={Styles.headerBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Header;
