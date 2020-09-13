import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import noImage from '../../assets/img/no-image-1.jpg';
import styles from './menuStyle';

const CardCatalog = (props) => {
  const {loading} = useSelector((state) => state.menuState);
  const {menu} = props;
  return (
    <Pressable
      onPress={() => {
        props.onPressCard(menu.id);
      }}
      style={styles.cardContainer}>
      <SkeletonContent
        containerStyle={styles.cardImageContainer}
        // layout={styles.cardImage}
        isLoading={
          loading.mainCoursePrev || loading.dessertPrev || loading.beveragePrev || loading.snackPrev
        }>
        <FastImage
          style={styles.cardImage}
          source={menu.image_path ? {uri: menu.image_path} : noImage}
        />
      </SkeletonContent>
      <View style={styles.cardTextContainer}>
        <SkeletonContent
          containerStyle={styles.cardTextContainer}
          layout={[styles.cardTextPrice, styles.cardTextPrice, styles.cardTextPrice]}
          isLoading={
            loading.mainCoursePrev ||
            loading.dessertPrev ||
            loading.beveragePrev ||
            loading.snackPrev
          }>
          <Text numberOfLines={2} style={styles.cardTextTitle}>
            {menu.name ? menu.name : ''}
          </Text>
          <Text numberOfLines={1} style={styles.cardTextPrice}>
            Rp. {menu.price ? menu.price : ''}
          </Text>
        </SkeletonContent>
      </View>
    </Pressable>
  );
};

export default CardCatalog;
