import React, {useRef} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
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
          android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>-</Text>
        </Pressable>
        <Text
          style={{
            ...styles.counterButtonContainerText,
            fontSize: 12,
            paddingTop: 3,
          }}>
          {quantity}
        </Text>
        <Pressable
          onPress={() => {
            dispatch(changeQuantity(menu.id, 1));
          }}
          android_ripple={{color: '#E3E3E7', radius: 15, borderless: true}}>
          <Text style={{...styles.counterButtonContainerText, color: '#AB84C8'}}>+</Text>
        </Pressable>
      </View>
    </>
  );
};

const AddButton = ({id}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cardListButtonContainer}>
      <Pressable
        onPress={() => {
          dispatch(addToCart(id));
        }}
        android_ripple={{color: '#E3E3E7', radius: 25, borderless: true}}
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
      <View style={styles.cardListContainer}>
        <Pressable style={styles.cardListImage} onPress={handleClick}>
          <SkeletonContent
            containerStyle={styles.cardListImage}
            layout={styles.cardListImage}
            isLoading={loading.menuList}>
            <Image
              style={styles.cardListImage}
              source={menu.image_path ? {uri: menu.image_path} : noImage}
            />
          </SkeletonContent>
        </Pressable>
        <Pressable style={styles.cardListTextContainer} onPress={handleClick}>
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
              <Text style={styles.cardListPriceText}>Rp. {menu.price}</Text>
            </View>
          </SkeletonContent>
        </Pressable>
      </View>
      <SkeletonContent
        // containerStyle={styles.cardListButtonContainer}
        layout={styles.cardListButtonContainer}
        isLoading={loading.menuList}>
        {onCart >= 0 ? <CounterButton menu={menu} cart={cart} /> : <AddButton id={menu.id} />}
      </SkeletonContent>
    </>
  );
};

export default CardList;
