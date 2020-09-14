/* eslint-disable no-nested-ternary */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addToCart, changeQuantity} from '../../redux/action/menuAction';
import {isEmpty} from 'underscore';
import Modal from 'react-native-modal';
import styles from './menuStyle';
import noImage from '../../assets/img/no-image-1.jpg';

const CounterButton = ({menu}) => {
  let quantity = 1;
  const {cart} = useSelector((state) => state.menuState);
  const dispatch = useDispatch();
  const idx = cart.findIndex((item) => {
    return menu.id === item.id;
  });
  if (idx >= 0) {
    quantity = cart[idx].quantity;
  }
  return (
    <>
      <View
        style={{
          ...styles.counterButtonContainer,
          paddingTop: 0,
          width: 0.5 * Dimensions.get('window').width,
          height: 42,
          alignSelf: 'center',
          marginRight: 0,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#E3E3E7',
          backgroundColor: 'white',
        }}>
        <Pressable
          onPress={() => {
            dispatch(changeQuantity(menu.id, -1));
          }}
          style={{
            width: '35%',
            heigth: '100%',
          }}
          android_ripple={{color: '#E3E3E7', radius: 40, borderless: false}}>
          <Text
            style={{
              ...styles.counterButtonContainerText,
              color: '#AB84C8',
              fontSize: 24,
              paddingTop: 3,
            }}>
            -
          </Text>
        </Pressable>
        <Text
          style={{
            ...styles.counterButtonContainerText,
            fontSize: 20,
            paddingTop: 5,
            width: '30%',
            color: 'black',
          }}>
          {quantity}
        </Text>
        <Pressable
          style={{
            width: '35%',
            heigth: '100%',
          }}
          onPress={() => {
            dispatch(changeQuantity(menu.id, 1));
          }}
          android_ripple={{color: '#E3E3E7', radius: 40, borderless: false}}>
          <Text
            style={{
              ...styles.counterButtonContainerText,
              color: '#AB84C8',
              fontSize: 24,
              paddingTop: 3,
            }}>
            +
          </Text>
        </Pressable>
      </View>
    </>
  );
};

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
    let idx = -1;
    if (!isEmpty(this.props.cart)) {
      idx = this.props.cart.findIndex((item) => {
        return item.id === menu.id;
      });
    }
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
          <View style={styles.handle} />
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.modalImage}
              resizeMode="cover"
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
              Rp. {menu.price !== undefined ? menu.price.toLocaleString('id-ID') : 0}
            </Text>
          </View>
          {idx >= 0 ? (
            <CounterButton menu={menu} />
          ) : (
            <Pressable
              onPress={() => {
                this.props.addToCart(menu);
              }}
              android_ripple={{color: 'rgba(0,0,0,0.2)', radius: 25, borderless: false}}
              style={styles.buttonAddCart}>
              <Text style={styles.buttonAddCartText}>Add to cart</Text>
            </Pressable>
          )}
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.menuState.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(MenuDetail);
