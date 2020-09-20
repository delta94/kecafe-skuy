import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';

const CheckoutScreen = (props) => {
  const {cart} = useSelector((state) => state.menuState);
  return (
    <View>
      <Text>ini CheckoutScreen</Text>
    </View>
  );
};

export default CheckoutScreen;
