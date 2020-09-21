/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {BackHandler, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import MenuList from './src/component/Menu/MenuList';
import LastOrder from './src/component/LastOrder/LastOrder';
import UserProfile from './src/component/UserProfile/UserProfile';
import UserView from './src/component/UserView/UserView.Customer';
import LoginScreen from './src/screen/Login.Screen';
import RegisterScreen from './src/screen/Register.Screen';
import CheckoutScreen from './src/screen/Checkout.Screen';
import Cart from './src/component/Cart/Cart';
import SplashScreen from './src/component/SplashScreen/Splash';
import {store, persistor} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />
          <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen options={{gestureEnabled: false}} name="AllMenu" component={UserView} />
              <Stack.Screen name="LastOrder" component={LastOrder} />
              <Stack.Screen name="Profile" component={UserProfile} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="MenuList" component={MenuList} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
