import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../component/UserProfile/UserProfile';

const Stack = createStackNavigator();

const UserProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default UserProfileStack;
