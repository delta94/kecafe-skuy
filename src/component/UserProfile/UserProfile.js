import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import userIcon from '../../assets/img/user.jpg';
import headerStyle from '../Header/headerStyle';

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
    height: height - 111,
  },
});

const UserProfileHeader = (props) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Text style={headerStyle.headerText}>Profile</Text>
      </View>
    </View>
  );
};

const UserProfile = (props) => {
  return (
    <>
      <UserProfileHeader />
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
