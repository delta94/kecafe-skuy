import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  menuList: {
    backgroundColor: '#E3E3E7',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCont: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    alignSelf: 'flex-end',
  },
  childText: {
    color: '#AEAEB0',
  },
  separator: {
    height: 1,
    width: width - 20,
    backgroundColor: '#E3E3E7',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default styles;
