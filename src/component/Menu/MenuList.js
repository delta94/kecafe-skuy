/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, {useEffect, useState, useRef} from 'react';
import {Text, View, VirtualizedList, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {isEmpty} from 'underscore';
import MenuCardList from './Menu.Card.List';
import Header from '../Header/Header';
import styles from './menuStyle';
import MenuDetail from './MenuDetail';
import {getMenu} from '../../redux/action/menuAction';
import {API_URL} from '../../utils/environment';
import foodBag from '../../assets/img/food-delivery.png';
import notFoundIcon from '../../assets/img/not-found.png';

const handleFetch = (pageInfo, loading, dispatch) => {
  if (pageInfo.nextPage !== undefined && pageInfo.nextPage !== '' && !loading.menuList) {
    dispatch(getMenu(`${API_URL}${pageInfo.nextPage}`, 'ALL'));
  }
};

const MenuList = React.memo((props) => {
  const [selectedId, setSelectedId] = useState(0);
  const showRef = useRef();
  const {navigation} = props;

  const params = props.route.params;

  const {menu, cart, pageInfo, loading} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();

  const handleCardClicked = (id) => {
    setSelectedId(id);
    showRef.current.showModal();
  };

  useEffect(() => {
    if (params !== undefined) {
      dispatch(
        getMenu(
          `${API_URL}/menu?search=&filter=${params.categoryId}&sortby=price&order=ASC&page=1&limit=12`,
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
      <Header navigation={navigation} categoryId={params ? params.categoryId : undefined} />
      <VirtualizedList
        refreshing={loading.menuList}
        showsVerticalScrollIndicator={false}
        windowSize={10}
        maxToRenderPerBatch={10}
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
        ListFooterComponent={() => {
          return (
            <>
              <View
                style={
                  onCart > 0
                    ? {
                        ...styles.footerContainer,
                        height: styles.footerContainerAfterButton.height,
                      }
                    : styles.footerContainer
                }>
                {!isEmpty(menu) ? (
                  <Text style={styles.footerText}>Whoops, you have reach the bottom:)</Text>
                ) : (
                  <>
                    <FastImage
                      source={notFoundIcon}
                      style={{width: 32, height: 32, resizeMode: 'cover', alignSelf: 'center'}}
                    />
                    <Text style={styles.footerText}>oops, menu not found!</Text>
                  </>
                )}
              </View>
            </>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
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
