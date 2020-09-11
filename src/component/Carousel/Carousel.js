import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class CarouselCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  renderItem({item}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 150,
          width: 300,
          padding: 50,
          marginTop: 5,
          elevation: 3,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 5,
          paddingBottom: 5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            height: 160,
          }}>
          <Carousel
            layout="default"
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={320}
            itemWidth={300}
            renderItem={this.renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
            inactiveSlideOpacity={1}
            autoplay={true}
            enableMomentum={false}
            lockScrollWhileSnapping={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}
