import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log(width, height);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: width * 0.42,
    height: '100%',
    maxHeight: height * 0.29,
    margin: 5,
    elevation: 5,
    backgroundColor: 'white',
  },
  cardImageContainer: {
    height: '100%',
    width: '100%',
    maxHeight: 155,
  },
  cardImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardTextContainer: {
    padding: 5,
    width: '100%',
    flex: 1,
  },
  cardTextTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardTextPrice: {
    fontSize: 12,
    fontWeight: '700',
  },
});

export {styles};
