import { View, Text, StyleSheet } from 'react-native';

import SignUpContainer from '../components/SignUpPage/SignUpContainer';

function SignUpPage({ navigation }: any) {
  return (
    <View style={SignUpPageLayout.container}>
      <View style={SignUpPageLayout.SignUpContainer}>
        <SignUpContainer navigation={navigation} />
      </View>
    </View>
  );
}

const SignUpPageLayout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  SignUpContainer: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 150,
  },
});

export default SignUpPage;
