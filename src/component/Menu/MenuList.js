import React, {Component, useState} from 'react';
import {FlatList, Dimensions, Text, View, Image, Pressable} from 'react-native';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import MenuCardList from './Menu.Card.List';
import styles from './menuStyle';
import headerStyle from '../Header/headerStyle';
import SearchComponent from '../Search/Search';
import backIcon from '../../assets/img/Arrow.png';

const {height} = Dimensions.get('window');

const FooterComponent = () => {
  return (
    <>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Whoops, you have reach the last menu:)</Text>
      </View>
    </>
  );
};

const DATA = [
  {
    id: 1,
    name: 'Takoyaki',
    image: takoyaki,
    price: '25.000',
  },
  {
    id: 2,
    name: 'Takoyaki',
    image: takoyaki,
    price: '25.000',
  },
  {
    id: 3,
    name: 'Takoyaki',
    image: takoyaki,
    price: '25.000',
  },
  {
    id: 4,
    name: 'Takoyaki',
    image: takoyaki,
    price: '25.000',
  },
  {
    id: 5,
    name: 'Takoyaki',
    image: takoyaki,
    price: '25.000',
  },
];

const FlatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const MenuList = (props) => {
  const renderHeader = (props) => {
    const {category} = props;
    return (
      <View style={headerStyle.container}>
        <View style={{...headerStyle.header, justifyContent: 'flex-start'}}>
          <Pressable style={{width: 22, height: 22, alignSelf: 'center', marginRight: 15}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                tintColor: 'black',
                resizeMode: 'cover',
                alignSelf: 'center',
              }}
              source={backIcon}
            />
          </Pressable>

          <Text style={headerStyle.headerText}>Main Course</Text>
        </View>
        <SearchComponent />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <MenuCardList menu={item} />;
  };
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.menuList}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={FooterComponent}
        ItemSeparatorComponent={FlatListItemSeparator}
        stickyHeaderIndices={[0]}
      />
    </>
  );
};

export default MenuList;
