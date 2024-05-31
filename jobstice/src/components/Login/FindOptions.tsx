// FindOptions.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Styles from './FindOptions.style';

const FindOptions = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Text style={Styles.text}>아이디 찾기</Text>
      </TouchableOpacity>
      <Text style={Styles.separator}> | </Text>
      <TouchableOpacity>
        <Text style={Styles.text}>패스워드 찾기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindOptions;
