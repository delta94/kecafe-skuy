/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Avatar, Accessory} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {logout, updateUserData} from '../../redux/action/authAction';
import FastImage from 'react-native-fast-image';
import {API_URL} from '../../utils/environment';
import userIcon from '../../assets/img/person_pp.png';
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

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const UserProfileHeader = ({navigation}) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          onPress={() => {
            navigation.navigate('AllMenu');
          }}
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 35, borderless: true}}
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

const UserProfile = ({navigation}) => {
  const {session, isValid} = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const handleAddPhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        let formData = new FormData();
        formData.append('profile_image', {
          uri: `file://${response.path}`,
          name: response.fileName,
          type: response.type,
          size: response.fileSize,
        });

        dispatch(updateUserData(`${API_URL}/auth/user/3`, formData));
      }
    });
  };
  if (!isValid) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        },
      ],
    });
  }
  return (
    <>
      <UserProfileHeader navigation={navigation} />
      <View style={styles.styleContainer}>
        <View style={{display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
          <Avatar
            containerStyle={styles.avatarContainer}
            size={'large'}
            {...{resizeMode: 'cover'}}
            rounded
            source={
              session.user.profile_image !== undefined
                ? {uri: session.user.profile_image}
                : userIcon
            }>
            <Accessory size={32} onPress={handleAddPhoto} />
          </Avatar>
          <View
            style={{
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: 30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                // alignSelf: 'center',
              }}>{`${session.user.first_name} ${session.user.last_name}`}</Text>

            <Text style={{fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
              {session.user.phone_number}
            </Text>
          </View>
        </View>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: false}}
          style={{
            height: 40,
            backgroundColor: '#959593',
            alignSelf: 'center',
            width: 150,
            paddingTop: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate('LastOrder');
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
            Order History
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: false}}
          style={{
            height: 40,
            backgroundColor: '#E4304B',
            alignSelf: 'center',
            width: 150,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            dispatch(logout());
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Log Out</Text>
        </Pressable>
      </View>
    </>
  );
};

export default UserProfile;
