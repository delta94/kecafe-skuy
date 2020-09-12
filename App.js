/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuList from './src/component/Menu/MenuList';
import ScreenWithNavbar from './src/screen/ScreenWithNavbar';
import Cart from './src/component/Cart/Cart';
import {store} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="ScreenWithNavbar">
            <Stack.Screen name="ScreenWithNavbar" component={ScreenWithNavbar} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="MenuList" component={MenuList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
