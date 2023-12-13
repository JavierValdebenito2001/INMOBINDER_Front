import {View} from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ReusableBtn, InfoPropiedad, InfoFinanciera, ImagenPropiedad, ResuableContenedor } from '../../components'
import { COLORS, SIZES } from '../../Constants/theme'


const Propiedad = () => {
  const route = useRoute();
  const { propiedad, imagen } = route.params;
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navegar a la vista del Album aquí
    navigation.navigate('Album', { photos: [{ photo: imagen, caption: propiedad.title }] });
  };


  return (
    <View style={{ width: SIZES.width, height: SIZES.height, alignItems: 'center' }}>
      <ResuableContenedor>
        <ContentSection propiedad={propiedad} handleImagePress={handleImagePress} />
        <EditInformationBtn onPress={handleImagePress} />
        <GalleryButtons handleImagePress={handleImagePress} />
      </ResuableContenedor>
    </View>
  );
};

const ContentSection = ({ propiedad, handleImagePress }) => (
  <View style={{ borderWidth: 0, flexDirection: 'column' }}>
    <View style={{ borderWidth: 0, width: '90%' }}>
      <InfoPropiedad propiedad={propiedad} />
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0 }}>
        <ImagenPropiedad propiedad={propiedad} />
        <ReusableBtn
          onPress={handleImagePress}
          btnText='Cambiar foto'
          iconName="pen"
          iconSize={SIZES.xSmall}
          btn={buttonStyles2}
          additionalStyles={buttonContainerStyles}
        />
      </View>
      <InfoFinanciera propiedad={propiedad} />
    </View>
  </View>
);

const EditInformationBtn = ({ onPress }) => (
  <View style={{ borderWidth: 0, marginTop: 20, }}>
    <ReusableBtn
      onPress={onPress}
      btnText='Editar información'
      iconName="pen"
      btn={buttonStyles2}
      iconSize={SIZES.xSmall}
      additionalStyles={buttonContainerStyles}
    />
  </View>
);

const GalleryButtons = ({ handleImagePress }) => (
  <View style={{ borderWidth: 0, flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20, borderRadius: 12 }}>
    <ReusableBtn
      onPress={handleImagePress}
      btnText='Galeria de videos'
      iconName= "film"
      iconSize={SIZES.large}
      btn={buttonStyles}
      additionalStyles={galleryButtonContainerStyles}
    />
    <ReusableBtn
      onPress={handleImagePress}
      btnText= 'Galeria de fotos'
      iconName= "images"
      iconSize={SIZES.large}
      btn={buttonStyles}
      additionalStyles={galleryButtonContainerStyles}
    />
  </View>
);

const buttonStyles = {
  color: COLORS.black,
  margin: 1,
  fontFamily: 'Inter-Black',
  fontSize: SIZES.small,
};
const buttonStyles2 = {
  color: COLORS.black,
  margin: 1,
  fontFamily: 'Inter-Black',
  fontSize: SIZES.xSmall,
};

const buttonContainerStyles = {
  
  height: 30,
  margin: 20,

};

const galleryButtonContainerStyles = {
  height: 40,

};

export default Propiedad

