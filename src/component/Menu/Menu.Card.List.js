import React, {useRef} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './menuStyle';

const CounterButton = ({menu}) => {
  return (
    <>
      <View style={styles.counterButtonContainer}>
        <Pressable android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>-</Text>
        </Pressable>
        <Text
          style={{
            ...styles.counterButtonContainerText,
            fontSize: 12,
            paddingTop: 3,
          }}>
          {menu.quantity}
        </Text>
        <Pressable android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>+</Text>
        </Pressable>
      </View>
    </>
  );
};

const AddButton = (props) => {
  return (
    <Pressable
      android_ripple={{color: '#E3E3E7', radius: 25, borderless: true}}
      style={styles.cardListButton}>
      <Text style={styles.cardListButtonText}>Add +</Text>
    </Pressable>
  );
};

const CardList = (props) => {
  const {menu} = props;
  const handleClick = () => {
    props.handleCardClicked(menu.id);
  };
  return (
    <>
      <Pressable style={styles.cardListContainer} onPress={handleClick}>
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
          <Text style={styles.cardListPriceText}>Rp. {menu.price}</Text>
        </View>
      </Pressable>
      <CounterButton menu={menu} />
    </>
  );
};

export default CardList;
