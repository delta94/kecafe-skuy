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
import Cart from './src/component/Cart/Cart';
import LastOrder from './src/component/LastOrder/LastOrder';
import UserProfile from './src/component/UserProfile/UserProfile';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        {/* <Header /> */}
        {/* <UserViewCustomer /> */}
        {/* <MenuList /> */}
        {/* <MenuDetail /> */}
        {/* <LastOrder /> */}
        <UserProfile />
        <NavBar />
        {/* <Cart /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
