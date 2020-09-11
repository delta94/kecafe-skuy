import {Dimensions, StyleSheet} from 'react-native';

const {width: deviceWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 50,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#BFCAD2',
    borderWidth: 1,
    backgroundColor: '#E3E3E7',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  formField: {
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    textAlignVertical: 'center',
    width: deviceWidth - 100,
    color: '#8797A0',
    fontSize: 12,
    height: 35,
  },
  icon: {
    height: 16,
    width: 16,
    resizeMode: 'cover',
    alignSelf: 'center',
    tintColor: '#8797A0',
  },
});

export default styles;
