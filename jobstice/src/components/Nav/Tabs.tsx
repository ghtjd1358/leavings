import React, { useEffect, useRef } from 'react';
import { BackHandler, Alert, TouchableOpacity } from 'react-native';
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
function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="홈"
        component={MainPage}
        options={{
          headerShown: true,
          // headerBackVisible: true,
        }}
      />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen({ navigation }) {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="캘린더"
        component={CalendarPage}
        options={{
          headerShown: true,
          // headerBackVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </CalendarStack.Navigator>
  );
}

function EmploymentStackScreen({ navigation }) {
  return (
    <EmploymentStack.Navigator>
      <EmploymentStack.Screen
        name="채용공고"
        component={EmploymentPage}
        options={{
          headerShown: true,
          // headerBackVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </EmploymentStack.Navigator>
  );
}

function CommunityStackScreen({ navigation }) {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="채팅방"
        component={CommunityPage}
        options={{
          headerShown: true,
          // headerBackVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </CommunityStack.Navigator>
  );
}

// 하단 tab
export default function Tabs() {
  return (
    <BottomTab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: _Colors.PrimaryBlue,
        tabBarShowLabel: false, // 하단에 이름 숨기는 속성
      }}
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
              color={focused ? _Colors.PrimaryBlue : 'gray'}
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
              color={focused ? _Colors.PrimaryBlue : 'gray'}
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
              color={focused ? _Colors.PrimaryBlue : 'gray'}
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
              color={focused ? _Colors.PrimaryBlue : 'gray'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
