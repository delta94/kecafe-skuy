import React, {useRef} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {useSelector, useDispatch} from 'react-redux';
import {changeQuantity, addToCart} from '../../redux/action/menuAction';
import styles from './menuStyle';
import noImage from '../../assets/img/no-image-1.jpg';

const CounterButton = ({menu, cart}) => {
  let quantity = 1;
  const dispatch = useDispatch();
  const idx = cart.findIndex((item) => {
    return menu.id === item.id;
  });
  if (idx >= 0) {
    quantity = cart[idx].quantity;
  }
  return (
    <>
      <View style={styles.counterButtonContainer}>
        <Pressable
          onPress={() => {
            dispatch(changeQuantity(menu.id, -1));
          }}
          style={{width: '35%', height: '100%', paddingTop: 2}}
          android_ripple={{color: '#E3E3E7', radius: 35, borderless: false}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>-</Text>
        </Pressable>
        <Text
          style={{
            ...styles.counterButtonContainerText,
            fontSize: 12,
            paddingTop: 5,
            width: '30%',
          }}>
          {quantity}
        </Text>
        <Pressable
          onPress={() => {
            dispatch(changeQuantity(menu.id, 1));
          }}
          style={{width: '35%', height: '100%', paddingTop: 2}}
          android_ripple={{color: '#E3E3E7', radius: 35, borderless: false}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>+</Text>
        </Pressable>
      </View>
    </>
  );
};

const AddButton = ({menu}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cardListButtonContainer}>
      <Pressable
        onPress={() => {
          dispatch(addToCart(menu));
        }}
        android_ripple={{color: 'rgba(0,0,0,0.4)', radius: 35, borderless: false}}
        style={styles.cardListButton}>
        <Text style={styles.cardListButtonText}>Add +</Text>
      </Pressable>
    </View>
  );
};

const CardList = (props) => {
  const {loading, cart} = useSelector((state) => state.menuState);
  const {menu} = props;
  const handleClick = () => {
    props.handleCardClicked(menu.id);
  };
  let onCart = -1;
  if (cart.length !== 0) {
    onCart = cart.findIndex((item) => {
      return menu.id === item.id;
    });
  }
  return (
    <>
      <Pressable style={styles.cardListContainer} onPress={handleClick}>
        <View style={styles.cardListImage}>
          <SkeletonContent
            containerStyle={styles.cardListImage}
            layout={styles.cardListImage}
            isLoading={loading.menuList}>
            <FastImage
              style={styles.cardListImage}
              source={menu.image_path ? {uri: menu.image_path} : noImage}
            />
          </SkeletonContent>
        </View>
        <View style={styles.cardListTextContainer}>
          <SkeletonContent
            containerStyle={styles.cardListTextContainer}
            layout={[
              {...styles.cardListTitleText, height: 20},
              {...styles.cardListDescText, height: 20},
              {...styles.cardListPriceText, height: 20},
            ]}
            isLoading={loading.menuList}>
            <View style={styles.cardListTextContainer}>
              <Text numberOfLines={2} style={styles.cardListTitleText}>
                {menu.name}
              </Text>
              <Text numberOfLines={4} style={styles.cardListDescText}>
                Id aute eu ad deserunt adipisicing voluptate. Commodo non in in excepteur deserunt
                magna et labore magna deserunt qui Lorem irure. Sint elit magna nulla nostrud ad ad
                id sit et esse pariatur. Dolor Lorem duis ea excepteur laboris sunt aute elit
                nostrud aute ut. Officia ad minim do ut tempor. Laborum nulla nisi eu laboris mollit
                minim minim excepteur sint sit aute incididunt.
              </Text>
              <Text style={styles.cardListPriceText}>Rp. {menu.price.toLocaleString('id-ID')}</Text>
            </View>
          </SkeletonContent>
        </View>
      </Pressable>
      <SkeletonContent
        // containerStyle={styles.cardListButtonContainer}
        layout={styles.cardListButtonContainer}
        isLoading={loading.menuList}>
        {onCart >= 0 ? <CounterButton menu={menu} cart={cart} /> : <AddButton menu={menu} />}
      </SkeletonContent>
    </>
  );
};

export default CardList;
