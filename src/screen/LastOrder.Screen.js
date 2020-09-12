import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LastOrder from '../component/LastOrder/LastOrder';

const Stack = createStackNavigator();

const LastOrderStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={LastOrder} />
    </Stack.Navigator>
  );
};

export default LastOrderStack;
