import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableText from '../Reusable/ReusableText'
import { COLORS, SIZES } from '../../Constants/theme'


const InfoFinanciera = ({ propiedad }) => {
    return (
        <View style={styles.container}>
      <View style={styles.item}>
        <ReusableText
          text={`Incluye Gastos comunes por ${propiedad.gc}`}
          family={'Inter-Medium'}
          size={SIZES.small}
          color={COLORS.black}
        />
      </View>
      <View style={styles.item}>
        <ReusableText
          text={`Estado: ${propiedad.estado}`}
          family={'Inter-Black'}
          size={SIZES.small}
          color={COLORS.black}
        />
      </View>
      <View style={styles.item}>
        <ReusableText
          text={`${propiedad.m2} metros cuadrados construidos`}
          family={'Inter-Medium'}
          size={SIZES.small}
          color={COLORS.black}
        />
      </View>
      <View style={styles.priceContainer}>
        <ReusableText
          text="Disponible por: "
          family={'Inter-Medium'}
          size={SIZES.small}
          color={COLORS.black}
        />
        <ReusableText
          text={propiedad.valor}
          family={'Inter-Medium'}
          size={SIZES.medium}
          color={COLORS.black}
        />
      </View>
      <View style={styles.detailsContainer}>
        <ReusableText
          text={`${propiedad.habitaciones} Habitaciones`}
          family={'Inter-Black'}
          size={SIZES.small}
          color={COLORS.black}
        />
        <ReusableText
          text={`${propiedad.baños} Baños`}
          family={'Inter-Black'}
          size={SIZES.small}
          color={COLORS.black}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <ReusableText
          text="Descripcion"
          family={'Inter-Black'}
          size={SIZES.small}
          color={COLORS.medium}
        />
        <ReusableText
          text={propiedad.descripcion}
          family={'Inter-Medium'}
          size={SIZES.small}
          color={COLORS.medium}
          textAlign={'center'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    display: 'flex',
    alignItems: 'center',
    marginTop: 4
  },
  item: {
    margin: 2,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 0,
    margin: 10,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderWidth: 0,
    marginTop: 25,
    marginBottom: 10,
  },
  descriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
});

export default InfoFinanciera