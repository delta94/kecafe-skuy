import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserViewCustomer from '../component/UserView/UserView.Customer';
import CartStack from './Cart.Screen';

const Stack = createStackNavigator();

const UserViewStack = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AllMenu" component={UserViewCustomer} />
    </Stack.Navigator>
  );
};

export default UserViewStack;
