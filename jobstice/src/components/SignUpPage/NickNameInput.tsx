import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Styles from './SignUpPage.style';
import { useState } from 'react';

function NickNameInput({ navigation, setStep }: any) {
  const [isNickName, setIsNIckName] = useState('');
  const [focused, setFocused] = useState(false);
  return (
    <>
      <View style={Styles.inputContianer}>
        <Text style={Styles.inputTitle}>닉네임</Text>
        <TextInput
          placeholder="닉네임"
          style={focused ? Styles.inputFocused : Styles.input}
          onChangeText={(e) => {
            setIsNIckName(e);
          }}
          onFocus={() => setFocused(true)}
          value={isNickName}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        style={isNickName ? Styles.activeButton : Styles.button}
        onPress={() => setStep('NICKNAME')}
        disabled={!isNickName}
      >
        <Text style={Styles.buttonText}> 가입완료하기 </Text>
      </TouchableOpacity>
    </>
  );
}

export default NickNameInput;
