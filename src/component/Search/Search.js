import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {getMenu} from '../../redux/action/menuAction';
import styles from './style';
import searchIcon from '../../assets/img/search.webp';
import {API_URL} from '../../utils/environment';

const SearchComponent = ({categoryId, navigation, isAllMenu, filter, ...props}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const route = useRoute();
  return (
    <View style={isAllMenu ? styles.container : styles.containerMenuList}>
      <FastImage style={styles.icon} source={searchIcon} />
      <TextInput
        autoCapitalize="none"
        returnKeyLabel="search"
        onChangeText={(e) => {
          setSearch(e);
        }}
        onSubmitEditing={() => {
          if (categoryId !== undefined) {
            dispatch(
              getMenu(
                `${API_URL}/menu?search=${search}&filter=${categoryId}&sortby=${filter.sort}&order=${filter.order}&page=1&limit=12`,
                'ALL'
              )
            );
          } else {
            dispatch(
              getMenu(
                `${API_URL}/menu?search=${search}&sortby=${filter.sort}&order=${filter.order}&page=1&limit=12`,
                'ALL'
              )
            );
          }
          if (navigation !== undefined) {
            if (route.name !== 'MenuList') {
              navigation.navigate('MenuList');
            }
          }
        }}
        placeholder="What do you want to eat?"
        style={isAllMenu ? styles.formField : styles.formFieldMenuList}
        placeholderTextColor="#9D9D9F"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
  );
};

export default SearchComponent;
