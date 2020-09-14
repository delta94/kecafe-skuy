/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, {useEffect, useState, useRef} from 'react';
import {Text, View, VirtualizedList, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {isEmpty} from 'underscore';
import MenuCardList from './Menu.Card.List';
import styles from './menuStyle';
import headerStyle from '../Header/headerStyle';
import SearchComponent from '../Search/Search';
import backIcon from '../../assets/img/Arrow.png';
import MenuDetail from './MenuDetail';
import {getMenu} from '../../redux/action/menuAction';
import {API_URL} from '../../utils/environment';
import foodBag from '../../assets/img/food-delivery.png';

const CustomHeader = ({navigation, categoryId}) => {
  return (
    <View style={headerStyle.container}>
      <View style={{...headerStyle.header, justifyContent: 'flex-start'}}>
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

        <Text style={headerStyle.headerText}>
          {categoryId === 1
            ? 'Main Course'
            : categoryId === 2
            ? 'Dessert'
            : categoryId === 3
            ? 'Beverage'
            : categoryId === 4
            ? 'Snack'
            : 'All Menu'}
        </Text>
      </View>
      <SearchComponent categoryId={categoryId} />
    </View>
  );
};

const handleFetch = (pageInfo, loading, dispatch) => {
  if (pageInfo.nextPage !== undefined && pageInfo.nextPage !== '' && !loading.menuList) {
    dispatch(getMenu(`${API_URL}${pageInfo.nextPage}`, 'ALL'));
  }
};

const MenuList = React.memo((props) => {
  const [selectedId, setSelectedId] = useState(0);
  const showRef = useRef();
  const {navigation} = props;
  const categoryId = props.route.params;
  const {menu, cart, pageInfo, loading} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();

  const handleCardClicked = (id) => {
    setSelectedId(id);
    showRef.current.showModal();
  };

  useEffect(() => {
    if (categoryId !== undefined) {
      dispatch(
        getMenu(
          `${API_URL}/menu?search=&filter=${categoryId}&sortby=price&order=ASC&page=1&limit=12`,
          'ALL'
        )
      );
    }
  }, [dispatch]);

  let idx = menu.findIndex((data) => data.id === selectedId);
  if (idx < 0) {
    idx = 0;
  }

  let onCart = 0;
  let totalPrice = 0;
  if (!isEmpty(cart)) {
    onCart = cart.length;
    totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  return (
    <>
      {menu.length !== 0 ? <MenuDetail menu={menu[idx]} ref={showRef} /> : null}
      <VirtualizedList
        refreshing={loading.menuList}
        showsVerticalScrollIndicator={false}
        windowSize={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        legacyImplementation={true}
        data={menu}
        getItem={(data, index) => {
          return data[index];
        }}
        getItemCount={(data) => data.length}
        renderItem={({item}) => {
          return <MenuCardList key={item.id} handleCardClicked={handleCardClicked} menu={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        style={styles.menuList}
        ListHeaderComponent={() => {
          return <CustomHeader navigation={navigation} categoryId={categoryId} />;
        }}
        ListFooterComponent={() => {
          return (
            <>
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Whoops, you have reach the bottom:)</Text>
              </View>
            </>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        stickyHeaderIndices={[0]}
        initialNumToRender={12}
        onEndReached={() => {
          handleFetch(pageInfo, loading, dispatch);
        }}
        onEndReachedThreshold={0.2}
      />
      {onCart > 0 ? (
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: false}}
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={styles.floatingCart}>
          <Text style={{color: 'white', fontWeight: 'bold', paddingTop: 3}}>
            {onCart} item(s) | Rp. {totalPrice.toLocaleString('id-ID')}
          </Text>
          <FastImage
            style={{width: 24, height: 24, alignSelf: 'center'}}
            resizeMode="cover"
            tintColor="white"
            source={foodBag}
          />
        </Pressable>
      ) : null}
    </>
  );
});

export default MenuList;
