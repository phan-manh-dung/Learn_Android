import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Login from './Login';
import Home from './Home';
import Setting from './Setting';
import 'react-native-gesture-handler';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image source={require('../images/home.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <Image source={require('../images/setting.png')} style={{width: 25, height: 25}} resizeMode="stretch" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootComponent = function () {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default RootComponent;
