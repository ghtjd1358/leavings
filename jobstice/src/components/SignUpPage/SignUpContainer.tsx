import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Styles from './SignUpPage.style';
import IdInput from './IdInput';
import PwInput from './PwInput';
import SignUpStep from './SignUpStep';
import { useState, useEffect } from 'react';
import NickNameInput from './NickNameInput';
import { CommonActions } from '@react-navigation/native';

function SignUpContainer({ navigation }: any) {
  const [step, setStep] = useState('ID');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
    const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
      if (step === 'ID') {
        return;
      }
      e.preventDefault();
      handleBackPress();
    });

    return unsubscribe;
  }, [navigation, step]);

  //navigation, step

  const handleBackPress = () => {
    if (step === 'PW') {
      setStep('ID');
    } else if (step === 'NICKNAME') {
      setStep('PW');
    } else {
      navigation.navigate('Main');
    }
  };

  const registerStep = () => {
    switch (step) {
      case 'ID':
        return <IdInput navigation={navigation} setStep={setStep} />;
      case 'PW':
        return <PwInput navigation={navigation} setStep={setStep} />;
      case 'NICKNAME':
        return <NickNameInput navigation={navigation} setStep={setStep} />;
      case '':
        navigation.dispatch(CommonActions.goBack());
    }
  };

  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.Title}>회원가입</Text>
        {registerStep()}
        <SignUpStep step={step} />
      </View>
    </>
  );
}

export default SignUpContainer;
