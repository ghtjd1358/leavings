import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Styles from './SignUpPage.style';
import { useState } from 'react';
import setUserStore from '../../../store/LoginStore';
import { register } from '../SignUpPage/service/signUpApiService';
import { CommonActions } from '@react-navigation/native';

function NickNameInput({ navigation, setStep }: any) {
  const [isNickName, setIsNickName] = useState('');
  const [focused, setFocused] = useState(false);

  const { user_ID, user_PW, setNickName } = setUserStore();

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
      console.log('status >', typeof response.status);
      // if (response.status === '200') {
      //   setStep('COMPLETE');
      // }
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
          onChangeText={(e) => setIsNickName(e)}
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
