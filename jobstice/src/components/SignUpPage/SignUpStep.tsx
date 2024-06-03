import { Text, View } from 'react-native';
import Styles from './SignUpPage.style';

function SignUpStep({ step }: any) {
  return (
    <View style={Styles.stepContainer}>
      <Text
        style={step === 'ID' ? Styles.Circle_Active : Styles.Circle_Default}
      ></Text>
      <Text
        style={step === 'PW' ? Styles.Circle_Active : Styles.Circle_Default}
      ></Text>
      <Text
        style={
          step === 'NICKNAME' ? Styles.Circle_Active : Styles.Circle_Default
        }
      ></Text>
    </View>
  );
}

export default SignUpStep;
