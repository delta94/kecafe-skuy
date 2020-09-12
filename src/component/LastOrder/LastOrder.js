import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import headerStyle from '../Header/headerStyle';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import LastOrderCard from './LastOrderCard';
import styles from './style';

const DATA = [
  // {
  //   invoice: 12902,
  //   order_date: '27 September 2020 14:09:27',
  //   menu: [
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 2,
  //     },
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 3,
  //     },
  //   ],
  //   total_amount: 120000,
  // },
  // {
  //   invoice: 17382,
  //   order_date: '27 September 2020 14:09:27',
  //   menu: [
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 2,
  //     },
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 3,
  //     },
  //   ],
  //   total_amount: 120000,
  // },
  // {
  //   invoice: 19928,
  //   order_date: '27 September 2020 14:09:27',
  //   menu: [
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 2,
  //     },
  //     {
  //       name: 'takoyaki',
  //       image: takoyaki,
  //       quantity: 3,
  //     },
  //   ],
  //   total_amount: 120000,
  // },
];

const LastOrderHeader = (props) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Text style={headerStyle.headerText}>Last Order</Text>
      </View>
    </View>
  );
};

const LastOrderItem = (menu) => {
  return <LastOrderCard key={menu.invoice} menu={menu} />;
};

const LastOrder = () => {
  return (
    <>
      <LastOrderHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.menuList}
        contentInsetAdjustmentBehavior="automatic">
        {DATA.length !== 0 ? (
          DATA.map((menu) => {
            return LastOrderItem(menu);
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
