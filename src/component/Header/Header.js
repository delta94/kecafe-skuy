/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import {Badge, Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import styles from './headerStyle';
import cartIcon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';
import userIcon from '../../assets/img/user.jpg';

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
          onPress={() => {
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <SearchComponent
          style={{width: Dimensions.get('window').width - 70}}
          navigation={props.navigation}
        />
        <Avatar
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
          size={'small'}
          {...{resizeMode: 'cover', borderColor: 'black'}}
          containerStyle={{
            borderColor: '#E6E6E8',
            borderWidth: 0.8,
          }}
          rounded
          source={userIcon}></Avatar>
      </View>
    </View>
  );
};

export default Header;
