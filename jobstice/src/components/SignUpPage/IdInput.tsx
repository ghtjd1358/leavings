import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Styles from './SignUpPage.style';
import { useState, useEffect } from 'react';

import setUserStore from '../../../store/LoginStore';
import { userIdDuplicate } from '../../components/SignUpPage/service/signUpApiService';
import AntDesign from '@expo/vector-icons/AntDesign';

function IdInput({ navigation, setStep }: any) {
  const [isID, setIsID] = useState('');
  const [focused, setFocused] = useState(false);
  const [isMsg, setIsMsg] = useState('');

  //zustand
  const { user_ID, setID } = setUserStore();

  // useEffect(() => {
  //   console.log(isID);
  // }, [isID]);

  const userIdCheck = async () => {
    setID(isID);
    try {
      const data = isID;
      const response = await userIdDuplicate(data);
      console.log('아이디 중복>', response.success);

      if (response.success) {
        // true시 다음 단계로
        setStep('PW');
      } else {
        // 중복 시 메세지표시
        // console.log('아이디 검증 완료', response.message);
        setIsMsg(response.message);
      }
    } catch (error) {
      console.error('아이디 검증 실패:', error);
    }
  };

  return (
    <>
      <View style={Styles.inputContianer}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.inputTitle}>아이디</Text>
          {isMsg ? (
            <AntDesign name="infocirlceo" style={Styles.checkDesc} />
          ) : null}
          <Text style={Styles.checkDesc}>{isMsg}</Text>
        </View>
        <TextInput
          placeholder="아이디"
          style={focused ? Styles.inputFocused : Styles.input}
          onChangeText={(e) => {
            setIsID(e);
          }}
          onFocus={() => setFocused(true)}
          value={isID}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        style={isID ? Styles.activeButton : Styles.button}
        onPress={userIdCheck}
        disabled={!isID}
      >
        <Text style={Styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </>
  );
}

export default IdInput;
