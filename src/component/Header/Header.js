/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Pressable, Dimensions, ScrollView} from 'react-native';
import {Badge, Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {isEmpty} from 'underscore';
import FastImage from 'react-native-fast-image';
import styles from './headerStyle';
import cartIcon from '../../assets/img/cart.png';
import SearchComponent from '../Search/Search';
import filterIcon from '../../assets/img/filter.png';
import userIcon from '../../assets/img/person_pp.png';

const Header = (props) => {
  const {cart} = useSelector((state) => state.menuState);
  const {user} = useSelector((state) => state.authState.session);
  const cartCount = cart.length;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Menu</Text>
        <Pressable
          hitSlop={44}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: true}}
          style={styles.imageContainer}
          onPress={() => {
            props.navigation.navigate('Cart');
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
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <SearchComponent
          style={{
            containerWidth: Dimensions.get('window').width - 70,
            formWidth: Dimensions.get('window').width - 120,
          }}
          navigation={props.navigation}
        />
        <Avatar
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
          size={'small'}
          {...{resizeMode: 'cover', borderColor: 'black'}}
          containerStyle={{
            borderColor: '#E6E6E8',
            borderWidth: 0.8,
          }}
          rounded
          source={!isEmpty(user) ? {uri: user.profile_image} : userIcon}></Avatar>
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
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            price
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            name
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            added at
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonLarge}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            updated at
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonLarge}
          onPress={() => {
            props.onPressHandle(1);
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            main course
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}
          onPress={() => {
            props.onPressHandle(2);
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            desert
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}
          onPress={() => {
            props.onPressHandle(3);
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            beverage
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: false}}
          style={styles.buttonSmall}
          onPress={() => {
            props.onPressHandle(4);
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white'}}>
            snack
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Header;
