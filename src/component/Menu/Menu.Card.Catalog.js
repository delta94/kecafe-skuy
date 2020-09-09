import {Text, View, Image} from 'react-native';
import takoyaki from '../../assets/img/Takoyaki.jpg';
import React from 'react';
import {styles} from './menuStyle';

const CardCatalog = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={takoyaki} />
      </View>
      <View style={styles.cardTextContainer}>
        <Text numberOfLines={2} style={styles.cardTextTitle}>
          Takoyaki
        </Text>
        <Text numberOfLines={1} style={styles.cardTextPrice}>
          Rp. 25.000
        </Text>
      </View>
    </View>
  );
};

export default CardCatalog;
