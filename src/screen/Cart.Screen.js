import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../component/Cart/Cart';

const Stack = createStackNavigator();

const CartStack = (props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen options={{tabBarVisible: false}} name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
