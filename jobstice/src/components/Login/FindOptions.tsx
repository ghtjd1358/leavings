// FindOptions.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FindOptions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>아이디 찾기</Text>
      </TouchableOpacity>
      <Text style={styles.separator}> | </Text>
      <TouchableOpacity>
        <Text style={styles.text}>패스워드 찾기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
    opacity: 0.3,
  },
  separator: {
    fontSize: 16,
    color: '#000',
    opacity: 0.3,
  },
});

export default FindOptions;
