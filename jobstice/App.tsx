import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text } from 'react-native';
// 아이콘 라이브러리
import { Ionicons } from '@expo/vector-icons';

// 페이지
import LoginPage from './src/pages/LoginPage';
import Test from './src/components/DBTest/Test';
import MainPage from './src/pages/MainPage';
import CalendarPage from './src/pages/CalendarPage';
import EmploymentPage from './src/pages/EmploymentPage';
import CommunityPage from './src/pages/CommunityPage';
// 페이지

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// 하단 Navi
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { _Colors } from './src/styles/colors';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// 하단 탭
// 하단 탭
function MainTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: _Colors.PrimaryBlue,
        tabBarShowLabel: false, // 하단에 이름 숨기는 속성
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? _Colors.PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarPage}
        options={{
          tabBarLabel: '캘린더',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar"
              size={24}
              color={focused ? _Colors.PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Employment"
        component={EmploymentPage}
        options={{
          tabBarLabel: '채용공고',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="megaphone"
              size={24}
              color={focused ? _Colors.PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityPage}
        options={{
          tabBarLabel: '커뮤니티',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-ellipses"
              size={24}
              color={focused ? _Colors.PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Test" component={Test} />
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
