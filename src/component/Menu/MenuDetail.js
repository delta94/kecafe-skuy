import React, {Component, useState, useRef} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/action/menuAction';
import Modal from 'react-native-modal';
import styles from './menuStyle';
import noImage from '../../assets/img/no-image-1.jpg';

class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  showModal = () => {
    this.setState({isVisible: true});
  };

  render() {
    const {menu} = this.props;
    return (
      <Modal
        style={styles.modalContainer}
        swipeThreshold={250}
        swipeDirection="down"
        isVisible={this.state.isVisible}
        onSwipeComplete={() => {
          this.setState({isVisible: false});
        }}
        // backdropTransitionOutTiming={0}
        // hideModalContentWhileAnimating={true}
      >
        <View style={styles.container}>
          <View style={styles.handle}></View>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.modalImage}
              source={menu.image_path !== undefined ? {uri: menu.image_path} : noImage}
            />
          </View>
          <Text style={styles.menuTextTitle}>{menu.name ? menu.name : 'Menu name'}</Text>
          <Text style={styles.descText}>
            {menu.desc
              ? menu.desc
              : 'Nisi adipisicing qui officia voluptate. Consequat enim et quis nostrud in ex proident irure velit. Et minim velit proident nostrud dolor commodo elit laboris. Incididunt excepteur id labore culpa tempor excepteur enim sint ullamco non ad nulla ut ut. Lorem laboris id nostrud aute laboris aliquip. Consequat exercitation nostrud nisi sint minim.'}
          </Text>
          <View style={styles.priceTextWrapper}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={{...styles.priceText, fontWeight: '700'}}>
              Rp. {menu.price ? menu.price : 0}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              this.props.addToCart(menu.id);
              this.setState({isVisible: false});
            }}
            android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: false}}
            style={styles.buttonAddCart}>
            <Text style={styles.buttonAddCartText}>Add to cart</Text>
          </Pressable>
        </View>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(MenuDetail);
