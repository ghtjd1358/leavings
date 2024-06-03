import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Styles from './SignUpPage.style';
import { useState } from 'react';

function IdInput({ navigation, setStep }: any) {
  const [isID, setIsID] = useState('');
  const [focused, setFocused] = useState(false);
  return (
    <>
      <View style={Styles.inputContianer}>
        <Text style={Styles.inputTitle}>아이디</Text>
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
        onPress={() => setStep('PW')}
        disabled={!isID}
      >
        <Text style={Styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </>
  );
}

export default IdInput;
