import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../../../assets/favicon.png';

import Styles from './Login.style';

const Login: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={Styles.logoContainer}>
        <Image source={logo} style={Styles.logo}></Image>
      </View>
      <TextInput
        style={Styles.input}
        placeholder="아이디"
        keyboardType="default"
      />
      <TextInput
        style={Styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
      />
      <TouchableOpacity style={Styles.button} onPress={() => {}}>
        <Text style={Styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
