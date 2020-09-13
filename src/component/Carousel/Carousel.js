import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

import imageCarousel1 from '../../assets/img/carousel1.jpg';
import imageCarousel2 from '../../assets/img/carousel2.jpg';
import imageCarousel3 from '../../assets/img/carousel3.jpg';
import imageCarousel4 from '../../assets/img/carousel4.jpg';
import imageCarousel5 from '../../assets/img/carousel5.jpg';

export default class CarouselCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          image: imageCarousel1,
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          image: imageCarousel2,
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          image: imageCarousel3,
        },
        {
          title: 'Item 4',
          text: 'Text 4',
          image: imageCarousel4,
        },
        {
          title: 'Item 5',
          text: 'Text 5',
          image: imageCarousel5,
        },
      ],
    };
  }

  renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          height: 150,
          width: 300,
          marginTop: 5,
          elevation: 3,
        }}>
        <FastImage
          style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5}}
          source={item.image}
        />
      </View>
    );
  };

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
            loop={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}
