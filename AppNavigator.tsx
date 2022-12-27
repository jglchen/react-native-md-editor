import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputScreen from './screens/input';
import DisplayScreen from './screens/display';
import HelpScreen from './screens/help';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
  <NavigationContainer>
    <Tab.Navigator  
      initialRouteName="Input"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Input"
        component={InputScreen}
        options={{ headerTitle: 'Markdown Editor',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused ? 'create' : 'create-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      }} />
      <Tab.Screen
        name="Preview"
        component={DisplayScreen}
        options={{ headerTitle: 'Input Markdown Preview',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused ? 'browsers' : 'browsers-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      }} />
      <Tab.Screen
        name="Guide"
        component={HelpScreen}
        options={{ headerTitle: 'Markdown Guide',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused ? 'help-circle' : 'help-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      }} />
    </Tab.Navigator>
  </NavigationContainer>
  );

}
