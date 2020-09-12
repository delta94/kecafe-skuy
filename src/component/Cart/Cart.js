import React, {Component} from 'react';
import {FlatList, Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartCard from './Cart.Card';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import headerStyle from '../Header/headerStyle';
import backIcon from '../../assets/img/Arrow.png';
import styles from './style';

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
          onPress={() => {
            props.navigation.navigate('AllMenu');
          }}
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

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.menuState);
  const renderItem = (item) => {
    return <CartCard key={item.id} menu={item} />;
  };
  return (
    <>
      <CartHeader navigation={navigation} />
      {cart.length !== 0 ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.menuList}
            contentInsetAdjustmentBehavior="automatic">
            {cart.map((item) => {
              return renderItem(item);
            })}
          </ScrollView>
          <FooterComponent />
        </>
      ) : (
        <Text style={{textAlign: 'center', padding: 10}}>Cart is empty</Text>
      )}
    </>
  );
};

export default Cart;
