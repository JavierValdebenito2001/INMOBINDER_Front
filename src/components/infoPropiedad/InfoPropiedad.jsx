import React from 'react'
import { View, StyleSheet } from 'react-native'
import ReusableText from '../Reusable/ReusableText'
import { COLORS, SIZES } from '../../Constants/theme'


const InfoPropiedad = ({ propiedad }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ReusableText
          text={`Propiedad ${propiedad.id}`}
          family={'Inter-Black'}
          size={SIZES.large}
          color={COLORS.black}
        />
        <ReusableText
          text={propiedad.tipo}
          family={'Inter-Medium'}
          size={SIZES.medium}
          color={COLORS.black}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 0,

  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderWidth: 0

  }
})


export default InfoPropiedad
