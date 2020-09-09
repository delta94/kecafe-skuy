/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NavBar from './src/component/Navbar/Navbar.Customer';
import {Header} from './src/component/Header/Header';
import UserViewCustomer from './src/component/UserView/UserView.Customer';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Header />
        <UserViewCustomer />
        <NavBar />
      </SafeAreaView>
    </>
  );
};

export default App;
