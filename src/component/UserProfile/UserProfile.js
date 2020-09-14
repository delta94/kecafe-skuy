import React from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import userIcon from '../../assets/img/user.jpg';
import headerStyle from '../Header/headerStyle';
import backIcon from '../../assets/img/Arrow.png';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  avatarContainer: {
    marginTop: 50,
    marginBottom: 15,
    alignSelf: 'center',
    elevation: 3,
  },
  styleContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: height - 55,
  },
});

const UserProfileHeader = ({navigation}) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          onPress={() => {
            navigation.navigate('AllMenu');
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 15, borderless: false}}
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
        <Text style={headerStyle.headerText}>Profile</Text>
      </View>
    </View>
  );
};

const UserProfile = (props) => {
  return (
    <>
      <UserProfileHeader navigation={props.navigation} />
      <View style={styles.styleContainer}>
        <Avatar
          containerStyle={styles.avatarContainer}
          size={'xlarge'}
          {...{resizeMode: 'cover'}}
          rounded
          source={userIcon}>
          <Accessory size={32} onPress={() => console.log('Works!')} />
        </Avatar>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Taufiq Widi</Text>
        <Text style={{fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
          Greater Jakarta
        </Text>
        <Text style={{fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
          +6281284544654
        </Text>
      </View>
    </>
  );
};

export default UserProfile;
