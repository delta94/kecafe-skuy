import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Splash from '../../assets/img/cup_purple.png';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);
  return (
    <View
      source={Splash}
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        paddingTop: '70%',
      }}>
      <FastImage
        source={Splash}
        style={{width: 192, height: 192, alignSelf: 'center'}}
        {...{resizeMode: 'cover'}}
      />
    </View>
  );
};

export default SplashScreen;
