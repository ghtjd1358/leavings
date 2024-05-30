import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {useState} from 'react';
import axios from 'axios';

const Test: React.FC = () => {
    // DB 연동 테스트를 위한 함수
    const [isDB, setIsDB] = useState('');


  const dataPost = async (data: string) => {
    try {
      const res = await axios.post(
        'http://192.168.0.24:3000',
        { content: data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log('res >', res);
      return res;
    } catch (error) {
      throw new Error('post 오류 발생');
    }
  };

  const testSubmit = async () => {
    try {
      const data = { content: isDB };
      console.log('data >', isDB);
      const response = await dataPost(isDB);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <StatusBar style="auto" />
            <View style={styles.test}>
        <TextInput
          onChangeText={(e) => {
            setIsDB(e);
          }}
          value={isDB}
          placeholder="DB 연결 실험"
          onSubmitEditing={testSubmit}
          style={styles.input}
        />
      </View>
     
    </>
  );
};

const styles = StyleSheet.create({
  test: {
    flexDirection: 'row'
  },
    input: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    marginVertical: 20,
  },
});

export default Test;
