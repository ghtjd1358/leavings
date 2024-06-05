import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  BackHandler,
  Alert,
} from 'react-native';
// 아이콘 라이브러리
import { Ionicons } from '@expo/vector-icons';

// 페이지
import LoginPage from './src/pages/LoginPage';
import Test from './src/components/DBTest/Test';
import MainPage from './src/pages/MainPage';

import EmploymentPage from './src/pages/EmploymentPage';

import SignUpPage from './src/pages/SignUpPage';
import FindIdPage from './src/pages/FindIdPage';
import FindPwPage from './src/pages/FindPwPage';
import PwInput from './src/components/SignUpPage/PwInput';
import NickNameInput from './src/components/SignUpPage/NickNameInput';

// 페이지

import 'react-native-gesture-handler';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
// 하단 Navi
import { _Colors } from './src/styles/colors';
import Tabs from './src/components/Nav/Tabs';

const Stack = createStackNavigator();

// 하단 탭

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="FindId"
        component={FindIdPage}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="FindPw"
        component={FindPwPage}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="registerPW"
        component={PwInput}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="registerNickName"
        component={NickNameInput}
        options={{ headerTitle: '' }}
      />
    </Stack.Navigator>
  );
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
