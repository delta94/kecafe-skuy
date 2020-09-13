import React from 'react';
import {Text, View, Pressable, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import CartCard from './Cart.Card';
import {removeFromCart} from '../../redux/action/menuAction';
import headerStyle from '../Header/headerStyle';
import backIcon from '../../assets/img/Arrow.png';
import styles from './style';

const FooterComponent = (props) => {
  const {cart} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();
  return (
    <View style={styles.footerContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Total:</Text>
        <Text style={{fontSize: 16, fontWeight: '700'}}>
          Rp.{' '}
          {cart
            .map((item) => {
              return item.price * item.quantity;
            })
            .reduce((total, val) => {
              return total + val;
            }, 0)}
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable
          onPress={() => {
            const cartId = cart.map((item) => {
              return item.id;
            });
            cartId.forEach((item) => {
              dispatch(removeFromCart(item));
            });
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={{...styles.button, backgroundColor: '#E4304B'}}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.button}>
          <Text style={styles.buttonText}>Order</Text>
        </Pressable>
      </View>
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
          <FastImage
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
