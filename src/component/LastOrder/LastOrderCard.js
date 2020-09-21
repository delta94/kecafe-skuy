import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import styles from './style';

const RenderMenu = ({item}) => {
  return (
    <>
      <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
        <View style={styles.imageContainer}>
          <FastImage style={styles.imageStyle} source={{uri: item.image}} />
        </View>
        <View style={styles.textCont}>
          <Text numberOfLines={2} style={styles.nameText}>
            {item.menu_name}
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.childText}>{item.menu_quantity}x</Text>
            <Text style={styles.childText}>Rp. {item.price.toLocaleString('id-ID')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );
};

const LastOrderCard = (props) => {
  const {menu} = props;
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
          backgroundColor: 'white',
          marginTop: 10,
          elevation: 3,
        }}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.invoiceText}>Order Invoice</Text>
          <Text style={styles.invoiceText}>#{menu.invoice}</Text>
        </View>
        <Text style={styles.childText}>{moment(menu.order_date).format('LLL')}</Text>
        {menu.menu_order.map((item) => {
          return <RenderMenu item={item} />;
        })}
        <Text style={{textAlign: 'right', fontWeight: '700', fontSize: 16}}>
          Rp. {menu.total_amount.toLocaleString('id-ID')}
        </Text>
      </View>
    </>
  );
};

export default LastOrderCard;
