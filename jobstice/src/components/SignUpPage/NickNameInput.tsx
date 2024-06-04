import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Styles from './SignUpPage.style';
import { useState, useEffect } from 'react';
import setUserStore from '../../../store/LoginStore';

import { register } from '../SignUpPage/service/signUpApiService';

function NickNameInput({ navigation, setStep }: any) {
  const [isNickName, setIsNickName] = useState('');
  const [focused, setFocused] = useState(false);

  const { user_ID, user_PW, user_NickName, setNickName } = setUserStore();

  //   useEffect(() => {
  //     console.log('아이디 >', user_ID);
  //     console.log('비밀번호 >', user_PW);
  //     console.log('닉네임 >', user_NickName);
  //   }, [user_ID, user_PW, user_NickName]);

  const handleRegister = async () => {
    setNickName(isNickName);
    try {
      const data = {
        user_ID,
        user_PW,
        user_NickName: isNickName,
      };
      const response = await register(data);
      console.log('회원가입 성공:', response.config.data);
      // 회원가입 성공 후 처리 로직 추가
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
      <View style={Styles.inputContianer}>
        <Text style={Styles.inputTitle}>닉네임</Text>
        <TextInput
          placeholder="닉네임"
          style={focused ? Styles.inputFocused : Styles.input}
          onChangeText={(e) => {
            setIsNickName(e);
          }}
          onFocus={() => setFocused(true)}
          value={isNickName}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        style={isNickName ? Styles.activeButton : Styles.button}
        onPress={handleRegister}
        disabled={!isNickName}
      >
        <Text style={Styles.buttonText}>가입완료하기</Text>
      </TouchableOpacity>
    </>
  );
}

export default NickNameInput;
