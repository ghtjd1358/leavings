import React, { useEffect, useRef } from 'react';
import { BackHandler, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import MainPage from '../../pages/MainPage';
import CalendarPage from '../../pages/CalendarPage';
import EmploymentPage from '../../pages/EmploymentPage';
import CommunityPage from '../../pages/CommunityPage';
import { _Colors } from '../../styles/colors';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const EmploymentStack = createStackNavigator();
const CommunityStack = createStackNavigator();

// stack
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="홈" component={MainPage} />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="캘린더" component={CalendarPage} />
    </CalendarStack.Navigator>
  );
}

function EmploymentStackScreen() {
  return (
    <EmploymentStack.Navigator>
      <EmploymentStack.Screen name="채용공고" component={EmploymentPage} />
    </EmploymentStack.Navigator>
  );
}

function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="채팅방"
        component={CommunityPage}
        options={{ headerShown: true }}
      />
    </CommunityStack.Navigator>
  );
}

//

export default function Tabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: _Colors._PrimaryBlue,
        tabBarShowLabel: false, // 하단에 이름 숨기는 속성
      }}
      backBehavior={'history'}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? _Colors._PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: '캘린더',

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar"
              size={24}
              color={focused ? _Colors._PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Employment"
        component={EmploymentStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: '채용공고',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="megaphone"
              size={24}
              color={focused ? _Colors._PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="C"
        component={CommunityStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: '커뮤니티',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-ellipses"
              size={24}
              color={focused ? _Colors._PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
