import React from 'react';
import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Image,
  Pressable,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.formField}
        placeholderTextColor={'#8797A0'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 50,
  },
  formField: {
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    textAlignVertical: 'center',
    borderColor: '#BFCAD2',
    width: deviceWidth - 50,
    backgroundColor: '#E3E3E7',
    color: '#8797A0',
    fontSize: 12,
    height: 35,
  },
});

export default SearchComponent;
