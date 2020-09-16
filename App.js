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
import {PersistGate} from 'redux-persist/integration/react';
import MenuList from './src/component/Menu/MenuList';
import LastOrder from './src/component/LastOrder/LastOrder';
import UserProfile from './src/component/UserProfile/UserProfile';
import UserView from './src/component/UserView/UserView.Customer';
import LoginScreen from './src/screen/Login.Screen';
import RegisterScreen from './src/screen/Register.Screen';
import Cart from './src/component/Cart/Cart';
import {store, persistor} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />
          <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen options={{gestureEnabled: false}} name="AllMenu" component={UserView} />
              <Stack.Screen name="LastOrder" component={LastOrder} />
              <Stack.Screen name="Profile" component={UserProfile} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="MenuList" component={MenuList} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
