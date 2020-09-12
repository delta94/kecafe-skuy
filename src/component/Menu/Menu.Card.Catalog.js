import React from 'react';
import {Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import noImage from '../../assets/img/no-image-1.jpg';
import styles from './menuStyle';

const CardCatalog = (props) => {
  const {loading} = useSelector((state) => state.menuState);
  const {menu} = props;
  return (
    <View style={styles.cardContainer}>
      <SkeletonContent
        containerStyle={styles.cardImageContainer}
        layout={styles.cardImage}
        isLoading={loading}>
        <Image
          style={styles.cardImage}
          source={menu.image_path ? {uri: menu.image_path} : noImage}
        />
      </SkeletonContent>
      <View style={styles.cardTextContainer}>
        <SkeletonContent
          containerStyle={styles.cardTextContainer}
          layout={[styles.cardTextPrice, styles.cardTextPrice, styles.cardTextPrice]}
          isLoading={loading}>
          <Text numberOfLines={2} style={styles.cardTextTitle}>
            {menu.name ? menu.name : ''}
          </Text>
          <Text numberOfLines={1} style={styles.cardTextPrice}>
            Rp. {menu.price ? menu.price : ''}
          </Text>
        </SkeletonContent>
      </View>
    </View>
  );
};

export default CardCatalog;
