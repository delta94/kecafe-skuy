import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: width * 0.39,
    height: '100%',
    maxHeight: height * 0.29,
    margin: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
  cardImageContainer: {
    height: '100%',
    width: '100%',
    maxHeight: 140,
  },
  cardImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: '100%',
    width: '100%',
    maxHeight: 140,
    resizeMode: 'cover',
  },
  cardTextContainer: {
    padding: 5,
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    height: 40,
  },
  cardTextPrice: {
    fontSize: 12,
    fontWeight: '700',
    width: '100%',
    height: 20,
  },
  menuList: {
    backgroundColor: 'white',
    height: '100%',
  },
  cardListContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  cardListImage: {
    width: 64,
    height: 64,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardListTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  cardListTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
  },
  cardListDescText: {
    fontSize: 14,
    fontWeight: 'normal',
    width: '100%',
    paddingRight: 10,
    textAlign: 'justify',
    marginTop: 5,
    marginBottom: 5,
  },
  cardListPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
  },
  cardListButton: {
    alignSelf: 'flex-end',
    color: 'white',
    backgroundColor: '#AB84C8',
    width: 64,
    height: 24,
    borderRadius: 3,
    elevation: 2,
    marginRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
    marginBottom: 10,
  },
  cardListButtonText: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerContainer: {
    height: 50,
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    marginTop: 10,
    borderColor: '#E3E3E7',
  },
  footerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E3E3E7',
  },
});

export default styles;
