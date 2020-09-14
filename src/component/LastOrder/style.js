import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  menuList: {
    backgroundColor: 'white',
    width: '100%',
    height: height - 55,
  },
  imageContainer: {
    height: 64,
    width: 64,
    backgroundColor: 'white',
    borderRadius: 3,
    marginRight: 10,
    elevation: 2,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    resizeMode: 'cover',
  },
  invoiceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textCont: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    alignSelf: 'flex-end',
  },
  childText: {
    color: '#AEAEB0',
  },
});

export default styles;
