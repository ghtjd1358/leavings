// FindOptions.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Styles from './FindOptions.style';

const FindOptions = ({ navigation }: any) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Text style={Styles.text} onPress={() => navigation.navigate('FindId')}>
          아이디 찾기
        </Text>
      </TouchableOpacity>
      <Text style={Styles.separator}> | </Text>
      <TouchableOpacity>
        <Text style={Styles.text} onPress={() => navigation.navigate('FindPw')}>
          비밀번호 찾기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindOptions;
