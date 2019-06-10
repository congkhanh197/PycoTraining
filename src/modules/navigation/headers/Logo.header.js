import React from 'react';
import { IMAGES } from '../../../assets';
import { View, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const LogoHeader = () => (
  <Image
    style={styles.logo}
    source={IMAGES.logo}
    resizeMode={'contain'}
  />
);

const styles = StyleSheet.create({
  logo: {
    width: 138,
    height: 47
  },
});

export {LogoHeader}
