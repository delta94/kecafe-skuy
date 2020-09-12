import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import styles from './style';

const RenderMenu = ({item}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={item.image} />
      </View>
      <View style={styles.textCont}>
        <Text numberOfLines={2} style={styles.nameText}>
          {item.name}
        </Text>
        <Text style={styles.childText}>{item.quantity}x</Text>
      </View>
    </View>
  );
};

const LastOrderCard = (props) => {
  const {menu} = props;
  return (
    <>
      <View style={{display: 'flex', flexDirection: 'column', padding: 10}}>
        <Text style={styles.invoiceText}>Order Number #{menu.invoice}</Text>
        <Text style={styles.childText}>{menu.order_date}</Text>
        {menu.menu.map((item) => {
          return <RenderMenu item={item} />;
        })}
        <Text style={{textAlign: 'right', fontWeight: '700', fontSize: 16}}>
          Rp. {menu.total_amount}
        </Text>
      </View>
    </>
  );
};

export default LastOrderCard;
