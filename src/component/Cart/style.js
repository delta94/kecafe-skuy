import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  menuList: {
    backgroundColor: 'white',
    width: '100%',
    height: height - 117,
  },
  cardCartContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    paddingBottom: 0,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#E3E3E7',
  },
  cardCartImage: {
    width: 64,
    height: 64,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardCartTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    paddingRight: 5,
  },
  cardCartTitleText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 16,
    height: 40,
    width: '100%',
  },
  cardCartPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#E3E3E7',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  button: {
    width: 100,
    height: 32,
    backgroundColor: '#AB84C8',
    borderRadius: 5,
    margin: 10,
    paddingTop: 2,
    elevation: 2,
  },
  counterButtonMerge: {
    display: 'flex',
    flexDirection: 'row',
    width: width * 0.55,
  },
});

export default styles;
