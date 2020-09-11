import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './menuStyle';

const CardList = (props) => {
  const {menu} = props;
  return (
    <>
      <View style={styles.cardListContainer}>
        <Image style={styles.cardListImage} source={menu.image} />
        <View style={styles.cardListTextContainer}>
          <Text numberOfLines={2} style={styles.cardListTitleText}>
            {menu.name}
          </Text>
          <Text numberOfLines={4} style={styles.cardListDescText}>
            Id aute eu ad deserunt adipisicing voluptate. Commodo non in in excepteur deserunt magna
            et labore magna deserunt qui Lorem irure. Sint elit magna nulla nostrud ad ad id sit et
            esse pariatur. Dolor Lorem duis ea excepteur laboris sunt aute elit nostrud aute ut.
            Officia ad minim do ut tempor. Laborum nulla nisi eu laboris mollit minim minim
            excepteur sint sit aute incididunt.
          </Text>
          <Text style={styles.cardListPriceText}>{menu.price}</Text>
        </View>
      </View>
      <Pressable style={styles.cardListButton}>
        <Text style={styles.cardListButtonText}>Add +</Text>
      </Pressable>
    </>
  );
};

export default CardList;
