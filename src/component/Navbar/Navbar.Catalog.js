// import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {Image} from 'react-native';
// import LastOrder from '../LastOrder/LastOrder.Screen';
// import UserProfile from '../UserProfile/UserProfile.Screen';
// import UserView from '../UserView/UserView.Screen';
// import CartScreen from '../../screen/Cart.Screen';
// import menuIcon from '../../assets/img/menu.png';
// import orderIcon from '../../assets/img/order.png';
// import userIcon from '../../assets/img/user.png';

// const Tab = createMaterialBottomTabNavigator();

// function () {
//   return (
//     <Tab.Navigator
//       initialRouteName="AllMenu"
//       activeColor="#ffffff"
//       inactiveColor="#d9d9d9"
//       barStyle={{backgroundColor: '#AB84C8'}}>
//       <Tab.Screen
//         name="AllMenu"
//         component={UserView}
//         options={{
//           tabBarLabel: 'Menu',
//           tabBarIcon: () => (
//             <Image
//               style={{height: 24, width: 24, tintColor: 'white'}}
//               color="white"
//               source={menuIcon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="LastOrder"
//         component={LastOrder}
//         options={{
//           tabBarLabel: 'Last Order',
//           tabBarIcon: () => (
//             <Image
//               style={{height: 24, width: 24, tintColor: 'white'}}
//               color="white"
//               source={orderIcon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={UserProfile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: () => (
//             <Image
//               style={{height: 24, width: 24, tintColor: 'white'}}
//               color="white"
//               source={userIcon}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default MyTabs;
