import React, {useState} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import CardCatalog from '../Menu/Menu.Card.Catalog';
import customerStyle from './style';
import CarouselCustomer from '../Carousel/Carousel';

const initialState = {
  mainCourse: {},
  dessert: {},
  beverage: {},
  snack: {},
};

const UserViewCustomer = () => {
  const [previewMenu, setPreviewMenu] = useState(initialState);

  const renderPreviewMenu = (previewMenu) => {
    previewMenu.mainCourse.map((menu) => {
      return <CardCatalog menu={menu} />;
    });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={customerStyle.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={customerStyle.titleText}>Hot Items</Text>
        <CarouselCustomer />
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Main Course</Text>
          <Pressable style={customerStyle.seeAllButton}>
            <Text style={customerStyle.seeAllButtonText}>See All</Text>
          </Pressable>
        </View>
        <Text style={[customerStyle.titleText, {fontWeight: 'normal'}]}>
          Fill up your tummy! nyammi!
        </Text>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic"
          style={customerStyle.contentContainer}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Dessert</Text>
          <Pressable style={customerStyle.seeAllButton}>
            <Text style={customerStyle.seeAllButtonText}>See All</Text>
          </Pressable>
        </View>
        <Text style={[customerStyle.titleText, {fontWeight: 'normal'}]}>
          3... 2... 1... Close the meal!
        </Text>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic"
          style={customerStyle.contentContainer}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Beverage</Text>
          <Pressable style={customerStyle.seeAllButton}>
            <Text style={customerStyle.seeAllButtonText}>See All</Text>
          </Pressable>
        </View>
        <Text style={[customerStyle.titleText, {fontWeight: 'normal'}]}>
          Oh please, don't be like a snake!
        </Text>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic"
          style={customerStyle.contentContainer}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Snack</Text>
          <Pressable style={customerStyle.seeAllButton}>
            <Text style={customerStyle.seeAllButtonText}>See All</Text>
          </Pressable>
        </View>
        <Text style={[customerStyle.titleText, {fontWeight: 'normal'}]}>
          Still hungry but no money? Grab one of these!
        </Text>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic"
          style={customerStyle.contentContainer}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default UserViewCustomer;
