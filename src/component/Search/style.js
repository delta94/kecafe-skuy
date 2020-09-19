import {Dimensions, StyleSheet} from 'react-native';

const {width: deviceWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  containerMenuList: {
    width: deviceWidth - 30,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#E6E6E8',
    borderWidth: 1,
    backgroundColor: '#F7F7F9',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    width: deviceWidth - 70,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#E6E6E8',
    borderWidth: 1,
    backgroundColor: '#F7F7F9',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  formField: {
    alignSelf: 'center',
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    textAlignVertical: 'center',
    width: deviceWidth - 110,
    color: '#9D9D9F',
    fontSize: 16,
    height: 35,
  },
  formFieldMenuList: {
    alignSelf: 'center',
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    textAlignVertical: 'center',
    width: deviceWidth - 70,
    color: '#9D9D9F',
    fontSize: 16,
    height: 35,
  },
  icon: {
    height: 16,
    width: 16,
    resizeMode: 'cover',
    alignSelf: 'center',
    tintColor: '#717173',
  },
});

export default styles;
