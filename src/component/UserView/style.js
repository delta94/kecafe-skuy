import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const customerStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: windowHeight - 150,
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
});
