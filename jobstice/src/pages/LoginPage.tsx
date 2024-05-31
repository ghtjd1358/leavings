// LoginPage.js

import { View, StyleSheet } from 'react-native';
import Login from '../components/Login/Login';
import { SignUp, FindOptions } from '../components/Login';

function LoginPage() {
  return (
    <View style={LoginPageLayout.container}>
      <View style={LoginPageLayout.loginContainer}>
        <Login />
      </View>
      <View style={LoginPageLayout.findContainer}>
        <View style={FindIDLayout.container}>
          <FindOptions />
        </View>
      </View>
      <View style={LoginPageLayout.signUpContainer}>
        <SignUp />
      </View>
    </View>
  );
}

// Login 페이지 레이아웃만 적용
const LoginPageLayout = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  findContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

const FindIDLayout = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',
  },
});

export default LoginPage;
