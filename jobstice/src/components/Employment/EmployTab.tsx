// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/EmploymentPage';
import SettingsScreen from '../../pages/EmploymentPage2';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'EmploymentPage') {
              iconName = focused ? 'EmploymentPage' : 'Home';
            } else if (route.name === 'EmploymentPage2') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="EmploymentPage" component={EmploymentPage} />
        <Tab.Screen name="EmploymentPage2" component={EmploymentPage2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
