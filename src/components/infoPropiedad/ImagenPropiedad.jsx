import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagenPropiedad = ({ propiedad }) => {
  return (
    <View style={styles.container}>
      <Image source={propiedad.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    borderWidth: 0,
  },
  image: {
    resizeMode: 'cover',
    width: 150,
    height: 110,
  },
});

export default ImagenPropiedad;