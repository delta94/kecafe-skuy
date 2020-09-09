import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import CardCatalog from '../Menu/Menu.Card.Catalog';
import {customerStyle} from './style';
import CarouselCustomer from '../Carousel/Carousel';

const UserViewCustomer = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      style={customerStyle.scrollView}
      contentInsetAdjustmentBehavior="automatic">
      <Text style={customerStyle.titleText}>Hot Items</Text>
      <CarouselCustomer />
      <View style={customerStyle.contentContainer}>
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
      </View>
    </ScrollView>
  );
};

export default UserViewCustomer;
