import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import { styleRealEstate } from './RegisterRealEstateStyles'
import { Ionicons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { Button, Text, Image} from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';

export function RegisterRealEstateScreen() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleBack(){
    navigation.navigate(screen.account.optionRegister);
  }

  function handleTermsPress(){
    console.log("Terminos y condiciones");
  }

  function handleContinuer(){
    navigation.navigate(screen.account.agencyRealEstate);
  }




  return (

    <SafeAreaView style={styles.container}>

        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style={{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
         </TouchableOpacity>

         <View style= {styles.header}>
         <Image source={require('../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>

         <View style= {styleRealEstate.container}>
            <Text style= {{ ...styleRealEstate.textRegister, fontFamily: 'Cairo_700Bold'}}> Regístrate </Text>
            <Text style= {{ ...styleRealEstate.textRegisterEmail, fontFamily: 'Cairo_700Bold'}}> Registro mediante correo electrónico</Text>
            <Input placeholder='Ingresa el correo electrónico.' containerStyle={styleRealEstate.inputEmail}/>
            <Text style={{ ...styleRealEstate.text, fontFamily: 'Cairo_400Regular'}}> Al hacer clic en Continuar, aceptas los <Text style={{ ...styleRealEstate.text1, fontFamily:'Cairo_700Bold'}} onPress={handleTermsPress}>Términos y condiciones de uso </Text>de Inmobinder.</Text>

            <Button containerStyle={styleRealEstate.containerBtn} buttonStyle={styleRealEstate.btnStyle} onPress={handleContinuer}>
                <Text style={{ ...styleRealEstate.textBtn, fontFamily: 'Cairo_700Bold'}}> Continuar</Text>
            </Button>
         
         </View>

        
          
      


    </SafeAreaView>

  )
}