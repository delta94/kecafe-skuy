import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './headerStyle';
import cart_icon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Menu</Text>
        <Pressable
          android_ripple={{color: 'red', radius: 25, borderless: true}}
          style={styles.imageContainer}>
          <Image style={styles.image} source={cart_icon} />
        </Pressable>
      </View>
      <SearchComponent />
    </View>
  );
};
