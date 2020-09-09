/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  Text,
} from 'react-native';
import CardCatalog from './src/component/Menu/Menu.Card.Catalog';
import NavBar from './src/component/Navbar/Navbar.Cashier';

const windowHeight = Dimensions.get('window').height;
console.log(windowHeight);

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View style={{height: 50, backgroundColor: 'blue'}}>
          <Text>Home</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: windowHeight - 100}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-evenly',
            }}>
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
            <CardCatalog />
          </View>
        </ScrollView>
        <NavBar />
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          horizontal={true}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default App;
