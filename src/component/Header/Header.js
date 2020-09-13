import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import styles from './headerStyle';
import cartIcon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';

const Header = (props) => {
  const {cart} = useSelector((state) => state.menuState);
  const cartCount = cart.length;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Menu</Text>
        <Pressable
          hitSlop={44}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: true}}
          style={styles.imageContainer}
          onPressIn={() => {
            props.navigation.navigate('Cart');
          }}>
          <FastImage style={styles.image} source={cartIcon} />
          {cartCount > 0 ? (
            <Badge
              value={cartCount}
              status="success"
              badgeStyle={{backgroundColor: '#AB84C8'}}
              containerStyle={{position: 'absolute', bottom: 0, right: 0}}
            />
          ) : null}
        </Pressable>
      </View>
      <SearchComponent navigation={props.navigation} />
    </View>
  );
};

export default Header;
