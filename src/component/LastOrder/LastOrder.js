import React, {useEffect} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderHistory} from '../../redux/action/menuAction';
import FastImage from 'react-native-fast-image';
import headerStyle from '../Header/headerStyle';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import LastOrderCard from './LastOrderCard';
import styles from './style';
import backIcon from '../../assets/img/Arrow.png';

const LastOrderHeader = ({navigation}) => {
  return (
    <View style={{...headerStyle.container, height: 55}}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start', heigth: 55}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
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
        <Text style={headerStyle.headerText}>Last Order</Text>
      </View>
    </View>
  );
};

const LastOrder = (props) => {
  const {session} = useSelector((state) => state.authState);
  const {lastOrder} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderHistory(session.user.id));
  }, [dispatch]);

  return (
    <>
      <LastOrderHeader navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.menuList}
        contentContainerStyle={{paddingBottom: 10}}
        contentInsetAdjustmentBehavior="automatic">
        {lastOrder.length !== 0 ? (
          lastOrder.map((menu) => {
            return <LastOrderCard key={menu.invoice} menu={menu} />;
          })
        ) : (
          <Text style={{textAlign: 'center', padding: 10}}>
            {' '}
            Whoops you havent order an item? grab it!
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default LastOrder;
