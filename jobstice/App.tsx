import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import Test from './src/components/DBTest/Test';
import MainPage from './src/pages/MainPage';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App: React.FC = () => {
  const Stack = createStackNavigator();

  return (

    // <View style={styles.container}>
    // {/* <StatusBar style="auto" /> */}
    //   {/* <LoginPage></LoginPage> */}

    // {/* </View> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
