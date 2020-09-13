import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './headerStyle';
import cartIcon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Menu</Text>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: true}}
          style={styles.imageContainer}
          onPress={() => {
            props.navigation.navigate('Cart');
          }}>
          <FastImage style={styles.image} source={cartIcon} />
        </Pressable>
      </View>
      <SearchComponent navigation={props.navigation} />
    </View>
  );
};

export default Header;
