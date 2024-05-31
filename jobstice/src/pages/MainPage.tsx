import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function MainPage({ navigation }: any) {
  return (

    <>
      <View style={styles.container}>
        <Text>HOME</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Test" onPress={() => navigation.navigate('Test')} />
        <StatusBar style="auto" />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBtnContianer: {
    flexDirection: 'row',
  },
});

export default MainPage;
