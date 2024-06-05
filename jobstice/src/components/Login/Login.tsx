import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Login.style';
import { _Colors } from '../../styles/colors';
import { useState } from 'react';

const Login: React.FC = () => {
  const [isUserId, setIsUserId] = useState('');
  const [isUserPw, setIsUserPw] = useState('');

  return (
    <>
      <StatusBar style="auto" />
      <View style={Styles.logoContainer}>
        <Text style={Styles.Title}>로그인</Text>
        <TextInput
          style={Styles.input}
          placeholderTextColor={_Colors._Gray_5}
          placeholder="아이디"
          keyboardType="default"
          onChangeText={(e) => {
            setIsUserId(e);
          }}
        />
        <TextInput
          style={Styles.input}
          placeholderTextColor={_Colors._Gray_5}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={(e) => {
            setIsUserPw(e);
          }}
        />
        <TouchableOpacity style={Styles.button} onPress={() => {}}>
          <Text style={Styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
