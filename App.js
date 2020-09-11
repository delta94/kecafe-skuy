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
import Header from './src/component/Header/Header';
import UserViewCustomer from './src/component/UserView/UserView.Customer';
import MenuList from './src/component/Menu/MenuList';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        {/* <Header /> */}
        {/* <UserViewCustomer /> */}
        <MenuList />
        {/* <NavBar /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
