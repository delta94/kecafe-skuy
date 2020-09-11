import React from 'react';
import {Text, View, Image} from 'react-native';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import styles from './menuStyle';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const CardCatalog = (props) => {
  return (
    <View style={styles.cardContainer}>
      <SkeletonContent
        containerStyle={styles.cardImageContainer}
        layout={styles.cardImage}
        isLoading={false}>
        <Image style={styles.cardImage} source={takoyaki} />
      </SkeletonContent>
      <View style={styles.cardTextContainer}>
        <SkeletonContent
          containerStyle={styles.cardTextContainer}
          layout={[styles.cardTextPrice, styles.cardTextPrice, styles.cardTextPrice]}
          isLoading={false}>
          <Text numberOfLines={2} style={styles.cardTextTitle}>
            Takoyaki
          </Text>
          <Text numberOfLines={1} style={styles.cardTextPrice}>
            Rp. 25.000
          </Text>
        </SkeletonContent>
      </View>
    </View>
  );
};

export default CardCatalog;
