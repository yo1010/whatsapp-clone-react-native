import React from 'react';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import { MainTabParamList, ChatTabParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default () => {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Camera"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 3,
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={ChatScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreenNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={ChatScreenNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={ChatScreenNavigator}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatStack = createStackNavigator<ChatTabParamList>();

const ChatScreenNavigator = () => (
  <ChatStack.Navigator>
    <ChatStack.Screen
      name="Chat"
      component={ChatScreen}
      options={{ headerTitle: 'Chat' }}
    />
  </ChatStack.Navigator>
);
