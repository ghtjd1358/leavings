import { View, Text } from 'react-native';
import SignUpStyles from './SignUp.style';

function SignUp() {
  return (
    <>
      <View style={SignUpStyles.container}>
        <Text style={SignUpStyles.SignUpText}>
          나만의 취업 일정을 기록해 보세요
        </Text>
        <Text style={SignUpStyles.SignUpText2}>회원가입</Text>
      </View>
    </>
  );
}

export default SignUp;
