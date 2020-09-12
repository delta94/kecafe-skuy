import React, {useEffect, useState, useRef} from 'react';
import {FlatList, Text, View, Image, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scrolling';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import MenuCardList from './Menu.Card.List';
import styles from './menuStyle';
import headerStyle from '../Header/headerStyle';
import SearchComponent from '../Search/Search';
import backIcon from '../../assets/img/Arrow.png';
import MenuDetail from './MenuDetail';
import {getMenu} from '../../redux/action/menuAction';

const API_URL = 'http://192.168.18.36:8001';

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

const CustomHeader = (props) => {
  const {categoryId, navigation} = props;
  return (
    <View style={headerStyle.container}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('AllMenu');
          }}
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

const MenuList = (props) => {
  const [selectedId, setSelectedId] = useState(0);
  const showRef = useRef();
  const {navigation} = props;
  const categoryId = props.route.params;
  const {menu, pageInfo, loading} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return <CustomHeader navigation={navigation} category={categoryId} />;
  };

  const handleCardClicked = (id) => {
    setSelectedId(id);
    showRef.current.showModal();
  };

  const renderItem = ({item}) => {
    return <MenuCardList key={item.id} handleCardClicked={handleCardClicked} menu={item} />;
  };

  const handleFetch = () => {
    if (pageInfo.nextPage !== undefined && pageInfo.nextPage !== '' && !loading.menuList) {
      dispatch(getMenu(`${API_URL}${pageInfo.nextPage}`, 'ALL'));
    }
  };

  useEffect(() => {
    dispatch(
      getMenu(
        `${API_URL}/menu?search=&filter=${categoryId}&sortby=price&order=ASC&page=1&limit=8`,
        'ALL'
      )
    );
  }, []);

  let idx = menu.findIndex((data) => data.id === selectedId);
  if (idx < 0) {
    idx = 0;
  }
  return (
    <>
      {menu.length !== 0 ? <MenuDetail menu={menu[idx]} ref={showRef} /> : null}
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.menuList}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={FooterComponent}
        ItemSeparatorComponent={FlatListItemSeparator}
        stickyHeaderIndices={[0]}
        initialNumToRender={10}
        onEndReached={handleFetch}
        onEndReachedThreshold={0.05}
      />
    </>
  );
};

export default MenuList;
