import React, {Component} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import stylesMenu from '../Menu/menuStyle';

const CounterButton = ({menu}) => {
  return (
    <>
      <View style={stylesMenu.counterButtonContainer}>
        <Pressable android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...stylesMenu.counterButtonContainerText, color: '#AB84C8'}}>-</Text>
        </Pressable>
        <Text
          style={{
            ...stylesMenu.counterButtonContainerText,
            fontSize: 12,
            paddingTop: 3,
          }}>
          {menu.quantity}
        </Text>
        <Pressable android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...stylesMenu.counterButtonContainerText, color: '#AB84C8'}}>+</Text>
        </Pressable>
      </View>
    </>
  );
};

const CartCard = (props) => {
  const {menu} = props;
  return (
    <>
      <View style={styles.cardCartContainer}>
        <Image style={styles.cardCartImage} source={menu.image} />
        <View style={styles.cardCartTextContainer}>
          <Text numberOfLines={2} style={styles.cardCartTitleText}>
            {menu.name}
          </Text>
          <View style={styles.counterButtonMerge}>
            <Text style={styles.cardCartPriceText}>Rp. {menu.price * menu.quantity}</Text>
            <CounterButton menu={menu} />
          </View>
        </View>
      </View>
    </>
  );
};

export default CartCard;
