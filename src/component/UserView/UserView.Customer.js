import React, {useEffect} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMenu} from '../../redux/action/menuAction';
import CardCatalog from '../Menu/Menu.Card.Catalog';
import customerStyle from './style';
import CarouselCustomer from '../Carousel/Carousel';
import Header from '../Header/Header';

const API_URL = 'http://192.168.18.36:8001';

const initialState = {
  mainCourse: {},
  dessert: {},
  beverage: {},
  snack: {},
};

const UserViewCustomer = ({navigation}) => {
  const {preview} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMenu(
        `${API_URL}/menu?search=&filter=1&sortby=price&order=ASC&page=1&limit=5`,
        'MAIN_COURSE'
      )
    );
    dispatch(
      getMenu(`${API_URL}/menu?search=&filter=2&sortby=price&order=ASC&page=1&limit=5`, 'DESSERT')
    );
    dispatch(
      getMenu(`${API_URL}/menu?search=&filter=3&sortby=price&order=ASC&page=1&limit=5`, 'BEVERAGE')
    );
    dispatch(
      getMenu(`${API_URL}/menu?search=&filter=4&sortby=price&order=ASC&page=1&limit=5`, 'SNACK')
    );
  }, []);

  const onPressHandle = (categoryId) => {
    navigation.navigate('MenuList', categoryId);
  };

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={customerStyle.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={customerStyle.titleText}>Hot Items</Text>
        <CarouselCustomer />
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Main Course</Text>
          <Pressable
            style={customerStyle.seeAllButton}
            onPress={() => {
              onPressHandle(1);
            }}>
            <Text style={customerStyle.seeAllButtonText}>See All</Text>
          </Pressable>
        </View>
        <Text style={[customerStyle.titleText, {fontWeight: 'normal'}]}>
          Fill up your tummy! Yummy!
        </Text>
        <ScrollView
          horizontal={true}
          contentInsetAdjustmentBehavior="automatic"
          style={customerStyle.contentContainer}>
          {preview.mainCourseMenu.map((menu) => {
            return <CardCatalog key={menu.id} menu={menu} />;
          })}
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Dessert</Text>
          <Pressable
            style={customerStyle.seeAllButton}
            onPress={() => {
              onPressHandle(2);
            }}>
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
          {preview.dessertMenu.map((menu) => {
            return <CardCatalog key={menu.id} menu={menu} />;
          })}
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Beverage</Text>
          <Pressable
            style={customerStyle.seeAllButton}
            onPress={() => {
              onPressHandle(3);
            }}>
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
          {preview.beverageMenu.map((menu) => {
            return <CardCatalog key={menu.id} menu={menu} />;
          })}
        </ScrollView>
        <View style={customerStyle.sectionContainer}>
          <Text style={customerStyle.titleText}>Snack</Text>
          <Pressable
            style={customerStyle.seeAllButton}
            onPress={() => {
              onPressHandle(4);
            }}>
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
          {preview.snackMenu.map((menu) => {
            return <CardCatalog key={menu.id} menu={menu} />;
          })}
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default UserViewCustomer;
