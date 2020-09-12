import React, {Component} from 'react';
import {FlatList, Text, View, Pressable, Image, ScrollView} from 'react-native';
import CartCard from './Cart.Card';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import headerStyle from '../Header/headerStyle';
import backIcon from '../../assets/img/Arrow.png';
import styles from './style';

const DATA = [
  {
    id: 1,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 2,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 3,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 4,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 5,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 6,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 7,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 8,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 9,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
];

const FooterComponent = (props) => {
  return (
    <View style={styles.footerContainer}>
      <Pressable
        android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
        style={{...styles.button, backgroundColor: '#E3E3E7'}}>
        <Text style={{...styles.buttonText, color: 'black'}}>Cancel</Text>
      </Pressable>
      <Pressable
        android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
        style={styles.button}>
        <Text style={styles.buttonText}>Order</Text>
      </Pressable>
    </View>
  );
};

const CartHeader = (props) => {
  const {category} = props;
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 15, borderless: true}}
          style={{width: 22, height: 22, alignSelf: 'center', marginRight: 15}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              tintColor: 'black',
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
            source={backIcon}
          />
        </Pressable>

        <Text style={headerStyle.headerText}>Cart</Text>
      </View>
    </View>
  );
};

const Cart = (props) => {
  const renderItem = (item) => {
    return <CartCard key={item.id} menu={item} />;
  };
  return (
    <>
      <CartHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.menuList}
        contentInsetAdjustmentBehavior="automatic">
        {DATA.map((item) => {
          return renderItem(item);
        })}
      </ScrollView>
      <FooterComponent />
    </>
  );
};

export default Cart;
