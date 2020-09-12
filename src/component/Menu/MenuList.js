import React, {Component, useState, useRef} from 'react';
import {FlatList, Dimensions, Text, View, Image, Pressable} from 'react-native';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import MenuCardList from './Menu.Card.List';
import styles from './menuStyle';
import headerStyle from '../Header/headerStyle';
import SearchComponent from '../Search/Search';
import backIcon from '../../assets/img/Arrow.png';
import MenuDetail from './MenuDetail';

const FooterComponent = () => {
  return (
    <>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Whoops, you have reach the bottom:)</Text>
      </View>
    </>
  );
};

const DATA = [
  {
    id: 1,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
    desc:
      'Officia fugiat labore ea adipisicing nisi veniam aliquip id nostrud in tempor. Amet voluptate Lorem sunt excepteur cupidatat. Lorem sit fugiat esse nostrud culpa quis. Consequat nisi ea ullamco qui exercitation fugiat consectetur dolor incididunt eu. Est do occaecat ea occaecat in dolore pariatur non nostrud proident eu occaecat voluptate. Nulla tempor non esse sit ut esse occaecat. Ullamco anim cupidatat ex reprehenderit id consequat consequat elit in incididunt eu ea elit.',
  },
  {
    id: 2,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 3,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 4,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 5,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 6,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 7,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 8,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
  {
    id: 9,
    name: 'Takoyaki',
    image: takoyaki,
    price: 25000,
    quantity: 3,
  },
];

const FlatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const MenuList = (props) => {
  const [selectedId, setSelectedId] = useState(0);
  const showRef = useRef();
  const renderHeader = (props) => {
    const {category} = props;
    return (
      <View style={headerStyle.container}>
        <View style={{...headerStyle.header, justifyContent: 'flex-start'}}>
          <Pressable
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 15, borderless: true}}
            style={{width: 22, height: 22, alignSelf: 'center', marginRight: 15}}>
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

  const handleCardClicked = (id) => {
    setSelectedId(id);
    showRef.current.showModal();
  };

  const renderItem = ({item}) => {
    return <MenuCardList key={item.id} handleCardClicked={handleCardClicked} menu={item} />;
  };
  let idx = DATA.findIndex((data) => data.id === selectedId);
  if (idx < 0) {
    idx = 0;
  }
  return (
    <>
      <MenuDetail menu={DATA[idx]} ref={showRef} />
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
