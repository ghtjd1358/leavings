import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import {useState} from 'react';
import axios from 'axios';

const App: React.FC = () => {

  // DB 연동 테스트를 위한 함수
    const [isDB, setIsDB] = useState('');


  const dataPost = async (data) => {
    try {
      const res = await axios.post(
        'http://172.30.1.55:3000',
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage></LoginPage>
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
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

export default App;
