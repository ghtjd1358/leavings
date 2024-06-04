import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import useNumberBaseStore from '../../../store/test';

const Test: React.FC = () => {
  // DB 연동 테스트를 위한 함수
  const [isDB, setIsDB] = useState('');

  const dataPost = async (data: string) => {
    try {
      const res = await axios.post(
        'http://192.168.1.164:8081',
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

  // zustand
  const {
    numberA,
    numberB,
    increaseNumberA,
    increaseNumberB,
    testText,
    setData,
  } = useNumberBaseStore();

  const [isText, setIsText] = useState('');
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
        <View>
          <Text>number: {numberA}</Text>
          <Text>number: {numberB}</Text>

          <Text onPress={increaseNumberA}>A 증가</Text>

          <Text onPress={() => increaseNumberB(3)}>B 증가</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setIsText(e);
          }}
          placeholder="zustand 실험"
          value={isText}
        />
        <TouchableOpacity
          onPress={() => {
            console.log('Text pressed');
            setData(isText);
          }}
        >
          <Text>제출</Text>
        </TouchableOpacity>

        <Text>{testText}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  test: {
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 18,
    marginVertical: 20,
  },
});

export default Test;
