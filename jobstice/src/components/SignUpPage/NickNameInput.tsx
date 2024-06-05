import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Styles from './SignUpPage.style';
import { useEffect, useState } from 'react';
import setUserStore from '../../../store/LoginStore';
import { register } from '../SignUpPage/service/signUpApiService';
import { CommonActions } from '@react-navigation/native';
import { nickNameDuplicate } from '../../components/SignUpPage/service/signUpApiService';
import AntDesign from '@expo/vector-icons/AntDesign';

function NickNameInput({ navigation, setStep, refreshScreen }: any) {
  const [isNickName, setIsNickName] = useState('');
  const [focused, setFocused] = useState(false);
  const [isMsg, setIsMsg] = useState('');

  const { user_ID, user_PW, setNickName } = setUserStore();

  const handleRegister = async () => {
    setNickName(isNickName);
    try {
      const data = {
        user_ID,
        user_PW,
        user_NickName: isNickName,
      };
      // console.log(data.user_NickName);
      const res = await nickNameDuplicate(data.user_NickName);
      console.log('닉네임 중복>', res);

      // 닉네임 중복이 아닐 경우 alert
      if (res.success) {
        Alert.alert('회원 가입 하시겠습니까?', '', [
          { text: '취소' },
          {
            text: '확인',
            style: 'destructive',
            onPress: () => completeRegister(data),
          },
        ]);
      } else {
        // 중복 시 메세지표시
        // console.log('닉네임 검증 완료', response.message);
        setIsMsg(res.message);
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  // 회원가입 완료 함수
  const completeRegister = async (data: any) => {
    try {
      const response = await register(data);
      console.log('회원가입 성공:', response.config.data);
      console.log('status >', response.status);
      // navigation.navigate('Login');
      // setStep('');
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: 'Main' }],
      //   })
      // );
      setStep('');
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
      <View style={Styles.inputContianer}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.inputTitle}>닉네임</Text>
          {isMsg ? (
            <AntDesign name="infocirlceo" style={Styles.checkDesc} />
          ) : null}
          <Text style={Styles.checkDesc}>{isMsg}</Text>
        </View>
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
