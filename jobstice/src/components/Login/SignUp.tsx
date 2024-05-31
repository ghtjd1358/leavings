import { View, Text, Button } from 'react-native';
import SignUpStyles from './SignUp.style';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from '../../pages/SignUpPage';

function SignUp({ navigation }: any) {
  const Stack = createStackNavigator();
  return (
    <>
      <View style={SignUpStyles.container}>
        <Text style={SignUpStyles.SignUpText}>
          나만의 취업 일정을 기록해 보세요
        </Text>
        {/* <Text style={SignUpStyles.SignUpText2}>회원가입</Text> */}

        <Button
          title="회원가입"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </>
  );
}

export default SignUp;
