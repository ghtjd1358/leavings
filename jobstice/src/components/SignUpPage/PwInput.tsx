import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Styles from './SignUpPage.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import setUserStore from '../../../store/LoginStore';

function PwInput({ navigation, setStep }: any) {
  const [isPW, setIsPW] = useState('');
  const [isCheck, setIsCheck] = useState('');
  const [focused, setFocused] = useState(false);
  const [isMsg, setIsMsg] = useState('');

  const [verification, setVerification] = useState(false);

  useEffect(() => {
    const checkPwValue = () => {
      if (isPW === isCheck && isPW !== '') {
        setVerification(true);
        setIsMsg('');
      } else {
        setVerification(false);
        if (isCheck !== '' && isPW !== isCheck) {
          setIsMsg(`비밀번호를 확인해주세요`);
        } else {
          setIsMsg('');
        }
        123;
      }
    };
    checkPwValue();
  }, [isPW, isCheck]);

  const { user_ID, user_PW, setPW } = setUserStore();

  //   useEffect(() => {
  //     console.log('아이디 >', user_ID);
  //   }, [user_ID]);

  return (
    <>
      <View style={Styles.inputContianer}>
        <Text style={Styles.inputTitle}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호 입력"
          style={focused ? Styles.inputFocused : Styles.input}
          secureTextEntry={true}
          onChangeText={(e) => {
            setIsPW(e);
          }}
          onFocus={() => setFocused(true)}
          value={isPW}
          keyboardType="default"
        />
        <View style={Styles.titleContainer}>
          <Text style={Styles.inputTitle}>비밀번호 확인</Text>
          {isMsg ? (
            <AntDesign name="infocirlceo" style={Styles.checkDesc} />
          ) : null}

          <Text style={Styles.checkDesc}>{isMsg}</Text>
        </View>
        <TextInput
          placeholder="비밀번호 확인"
          style={Styles.input}
          secureTextEntry={true}
          onChangeText={(e) => {
            setIsCheck(e);
          }}
        />
      </View>
      <TouchableOpacity
        style={verification ? Styles.activeButton : Styles.button}
        onPress={() => {
          setPW(isCheck);
          setStep('NICKNAME');
        }}
        disabled={!verification}
      >
        <Text style={Styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </>
  );
}

export default PwInput;
