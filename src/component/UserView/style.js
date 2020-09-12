import {StyleSheet, Dimensions} from 'react-native';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

const customerStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: windowHeight - 192,
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentContainer: {
    backgroundColor: 'white',
    width: windowWidth,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllButton: {
    alignSelf: 'center',
    marginRight: 10,
  },
  seeAllButtonText: {
    color: '#AB84C8',
    fontWeight: '700',
  },
});

export default customerStyle;
