import { View, Text, Button, TouchableOpacity } from 'react-native';
import SignUpStyles from './SignUp.style';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from '../../pages/SignUpPage';

function SignUp({ navigation }: any) {
  return (
    <>
      <View style={SignUpStyles.container}>
        <Text style={SignUpStyles.SignUpText}>
          나만의 취업 일정을 기록해 보세요
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={SignUpStyles.SignUpText2}> 회원가입</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default SignUp;
