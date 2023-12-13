import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './slides.style';
import { ReusableText } from '../../components/index';
import { COLORS, SIZES } from '../../Constants/theme';
import { useNavigation } from '@react-navigation/native';

const Slides = ({ item }) => {
  const navigation = useNavigation();

  const handleTitlePress = () => {
    //Navegar a la vista Propiedad aqui
    navigation.navigate('propiedad', {propiedad: item} );
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTitlePress}>
        <View >
        <Image source={item.image} style={styles.image} />
      </View>
      </TouchableOpacity>
     
      <View style={styles.stack}>
        <TouchableOpacity onPress={handleTitlePress}>
      
          <ReusableText
            text={item.title}
            family={'Inter-Medium'}
            size={SIZES.xLarge}
            color={COLORS.blue}
          />

        </TouchableOpacity>

        <View style={styles.descripcion}>
          <ReusableText
            text={item.descripcion}
            family={'Inter-Medium'}
            size={SIZES.medium}
            color={COLORS.black}
          />
        </View>

      </View>


    </View>


  );
};

export default Slides

