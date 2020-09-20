/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {View, Text, Pressable, Dimensions, ScrollView} from 'react-native';
import {Badge, Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {isEmpty} from 'underscore';
import {useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './headerStyle';
import cartIcon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';
import userIcon from '../../assets/img/person_pp.png';
import priceIcon from '../../assets/img/price.png';
import nameIcon from '../../assets/img/name-tag.png';
import updateIcon from '../../assets/img/time-update.png';
import addedIcon from '../../assets/img/time-added.png';
import backIcon from '../../assets/img/Arrow.png';

const buttonStateInit = {
  price: false,
  name: false,
  addedAt: false,
  updatedAt: false,
};

const filterStateInit = {
  sort: 'price',
  order: 'ASC',
};

const Header = ({navigation, categoryId, ...props}) => {
  const {cart} = useSelector((state) => state.menuState);
  const {user} = useSelector((state) => state.authState.session);
  const [buttonState, setButtonState] = useState(buttonStateInit);
  const [filterState, setFilterState] = useState(filterStateInit);

  const toggleButton = (buttonKey) => {
    const newState = {...buttonState};
    for (const key in buttonState) {
      if (key === buttonKey) {
        newState[key] = !buttonState[key];
      } else {
        newState[key] = false;
      }
    }
    setButtonState(newState);
  };

  const route = useRoute();

  const isAllMenu = route.name === 'AllMenu';

  const cartCount = cart.length;
  return (
    <View style={styles.container}>
      <View style={isAllMenu ? styles.header : {...styles.header, justifyContent: 'flex-start'}}>
        {!isAllMenu ? (
          <Pressable
            onPress={() => {
              navigation.navigate('AllMenu');
            }}
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: true}}
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
        ) : null}
        <Text style={styles.headerText}>
          {categoryId === 1
            ? 'Main Course'
            : categoryId === 2
            ? 'Dessert'
            : categoryId === 3
            ? 'Beverage'
            : categoryId === 4
            ? 'Snack'
            : 'All Menu'}
        </Text>
        {isAllMenu ? (
          <Pressable
            hitSlop={44}
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: true}}
            style={styles.imageContainer}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <FastImage style={styles.image} source={cartIcon} />
            {cartCount > 0 ? (
              <Badge
                value={cartCount}
                status="success"
                badgeStyle={{backgroundColor: '#AB84C8'}}
                containerStyle={{position: 'absolute', bottom: 0, right: 0}}
              />
            ) : null}
          </Pressable>
        ) : null}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <SearchComponent navigation={navigation} isAllMenu={isAllMenu} filter={filterState} />
        {isAllMenu ? (
          <Avatar
            onPress={() => {
              navigation.navigate('Profile');
            }}
            size={'small'}
            {...{resizeMode: 'cover', borderColor: 'black'}}
            containerStyle={{
              borderColor: '#E6E6E8',
              borderWidth: 0.8,
            }}
            rounded
            source={!isEmpty(user) ? {uri: user.profile_image} : userIcon}></Avatar>
        ) : null}
      </View>
      <ScrollView
        horizontal={true}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{justifyContent: 'space-evenly', paddingLeft: 10, paddingRight: 10}}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => {
            toggleButton('price');
            setFilterState({sort: 'price', order: 'ASC'});
          }}
          style={buttonState.price ? styles.buttonSmallSelected : styles.buttonSmall}>
          <FastImage
            source={priceIcon}
            style={styles.iconStyle}
            tintColor={buttonState.price ? 'white' : 'black'}
          />
          <Text style={buttonState.price ? styles.buttonTextSelected : styles.buttonText}>
            price
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            toggleButton('name');
            setFilterState({sort: 'name', order: 'ASC'});
          }}
          style={buttonState.name ? styles.buttonSmallSelected : styles.buttonSmall}>
          <FastImage
            source={nameIcon}
            style={styles.iconStyle}
            tintColor={buttonState.name ? 'white' : 'black'}
          />
          <Text style={buttonState.name ? styles.buttonTextSelected : styles.buttonText}>name</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            toggleButton('addedAt');
            setFilterState({sort: 'added_at', order: 'DESC'});
          }}
          style={buttonState.addedAt ? styles.buttonSmallSelected : styles.buttonSmall}>
          <FastImage
            source={addedIcon}
            style={styles.iconStyle}
            tintColor={buttonState.addedAt ? 'white' : 'black'}
          />
          <Text style={buttonState.addedAt ? styles.buttonTextSelected : styles.buttonText}>
            added at
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            toggleButton('updatedAt');
            setFilterState({sort: 'updated_at', order: 'DESC'});
          }}
          style={buttonState.updatedAt ? styles.buttonLargeSelected : styles.buttonLarge}>
          <FastImage
            source={updateIcon}
            style={styles.iconStyle}
            tintColor={buttonState.updatedAt ? 'white' : 'black'}
          />
          <Text style={buttonState.updatedAt ? styles.buttonTextSelected : styles.buttonText}>
            updated at
          </Text>
        </Pressable>
        {isAllMenu ? (
          <>
            <Pressable
              android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
              style={styles.buttonLarge}
              onPress={() => {
                props.onPressHandle(1);
              }}>
              <Text style={styles.buttonText}>main course</Text>
            </Pressable>
            <Pressable
              android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
              style={styles.buttonSmall}
              onPress={() => {
                props.onPressHandle(2);
              }}>
              <Text style={styles.buttonText}>desert</Text>
            </Pressable>
            <Pressable
              android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
              style={styles.buttonSmall}
              onPress={() => {
                props.onPressHandle(3);
              }}>
              <Text style={styles.buttonText}>beverage</Text>
            </Pressable>
            <Pressable
              android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
              style={styles.buttonSmall}
              onPress={() => {
                props.onPressHandle(4);
              }}>
              <Text style={styles.buttonText}>snack</Text>
            </Pressable>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Header;
