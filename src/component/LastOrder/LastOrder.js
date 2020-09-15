import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import headerStyle from '../Header/headerStyle';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import LastOrderCard from './LastOrderCard';
import styles from './style';
import backIcon from '../../assets/img/Arrow.png';

const DATA = [
  {
    invoice: 12902,
    order_date: '27 September 2020 14:09:27',
    menu: [
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 2,
      },
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 3,
      },
    ],
    total_amount: 120000,
  },
  {
    invoice: 17382,
    order_date: '27 September 2020 14:09:27',
    menu: [
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 2,
      },
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 3,
      },
    ],
    total_amount: 120000,
  },
  {
    invoice: 19928,
    order_date: '27 September 2020 14:09:27',
    menu: [
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 2,
      },
      {
        name: 'takoyaki',
        image: takoyaki,
        quantity: 3,
      },
    ],
    total_amount: 120000,
  },
];

const LastOrderHeader = ({navigation}) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 15, borderless: false}}
          style={{
            width: 24,
            height: 24,
            alignSelf: 'center',
            marginRight: 38,
          }}>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
            }}
            tintColor="black"
            resizeMode="cover"
            source={backIcon}
          />
        </Pressable>
        <Text style={headerStyle.headerText}>Last Order</Text>
      </View>
    </View>
  );
};

const LastOrder = (props) => {
  return (
    <>
      <LastOrderHeader navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.menuList}
        contentInsetAdjustmentBehavior="automatic">
        {DATA.length !== 0 ? (
          DATA.map((menu) => {
            return <LastOrderCard key={menu.invoice} menu={menu} />;
          })
        ) : (
          <Text style={{textAlign: 'center', padding: 10}}>
            {' '}
            Whoops you havent order an item? grab it!
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default LastOrder;
