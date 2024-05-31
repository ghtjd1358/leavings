import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../../../assets/favicon.png';

import Styles from './Login.style';
import { _Colors } from '../../styles/colors';

const Login: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={Styles.logoContainer}>
        <Image source={logo} style={Styles.logo}></Image>
        <TextInput
          style={Styles.input}
          placeholderTextColor={_Colors._Gray_5}
          placeholder="아이디"
          keyboardType="default"
        />
        <TextInput
          style={Styles.input}
          placeholderTextColor={_Colors._Gray_5}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <TouchableOpacity style={Styles.button} onPress={() => {}}>
          <Text style={Styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
