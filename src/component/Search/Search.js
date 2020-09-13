import React, {useState} from 'react';
import {TextInput, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {getMenu} from '../../redux/action/menuAction';
import styles from './style';
import searchIcon from '../../assets/img/search.webp';
import {API_URL} from '../../utils/environment';

const SearchComponent = ({categoryId, navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <FastImage style={styles.icon} source={searchIcon} />
      <TextInput
        onChangeText={(e) => {
          setSearch(e);
        }}
        onSubmitEditing={() => {
          if (categoryId !== undefined) {
            dispatch(
              getMenu(
                `${API_URL}/menu?search=${search}&filter=${categoryId}&sortby=price&order=ASC&page=1&limit=12`,
                'ALL'
              )
            );
          } else {
            dispatch(
              getMenu(
                `${API_URL}/menu?search=${search}&sortby=price&order=ASC&page=1&limit=12`,
                'ALL'
              )
            );
          }
          if (navigation !== undefined) {
            navigation.navigate('MenuList');
          }
        }}
        placeholder="Search"
        style={styles.formField}
        placeholderTextColor="#9D9D9F"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
  );
};

export default SearchComponent;
