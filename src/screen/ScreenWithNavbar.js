import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native';
import LastOrder from '../component/LastOrder/LastOrder';
import UserProfile from '../component/UserProfile/UserProfile';
import UserView from '../component/UserView/UserView.Customer';
import menuIcon from '../assets/img/menu.png';
import orderIcon from '../assets/img/order.png';
import userIcon from '../assets/img/user.png';

const Tab = createMaterialBottomTabNavigator();

function ScreenWithNavbar() {
  return (
    <Tab.Navigator
      initialRouteName="AllMenu"
      activeColor="#ffffff"
      inactiveColor="#d9d9d9"
      barStyle={{backgroundColor: '#AB84C8'}}>
      <Tab.Screen
        name="AllMenu"
        component={UserView}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24, tintColor: 'white'}}
              color="white"
              source={menuIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LastOrder"
        component={LastOrder}
        options={{
          tabBarLabel: 'Last Order',
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24, tintColor: 'white'}}
              color="white"
              source={orderIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24, tintColor: 'white'}}
              color="white"
              source={userIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ScreenWithNavbar;
