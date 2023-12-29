import { View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleAgencyRE } from './AgencyREStyle'
import { Input, Button, Text } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { screen } from '../../../../utils/ScreenName'
import { useNavigation } from '@react-navigation/native'
import { Image } from '@rneui/base'

export function AgencyREScreen() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleBack(){
    navigation.navigate(screen.account.registerRealEstate);
  }

  function handleContinue(){
    console.log("Botón continuar");
  }

  return (

    <SafeAreaView style= {{justifyContent:'center'}}>

      <TouchableOpacity style= {styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle = {styleAgencyRE.scrollStyle}> 

        <View style= {styles.header}>

        <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
          

        </View>

        <View style = {styleAgencyRE.form}>
            <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%'}}>
                <Text style= {{ ...styleAgencyRE.textRegister, fontFamily: 'Cairo_700Bold'}}> REGISTRO </Text>
            </View>
              

                <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Nombre empresa </Text>
                <Input placeholder='Agartha Marketing Agency' containerStyle={styleAgencyRE.input}/>

                <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> RUT empresa </Text>
                <Input placeholder='00.000.000-0' containerStyle={styleAgencyRE.input}/>

                <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Teléfono empresa </Text>
                <Input placeholder='900000000' containerStyle={styleAgencyRE.input}/>

                <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleAgencyRE.input} secureTextEntry={true}/>

                <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Confirmar contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleAgencyRE.input} secureTextEntry={true}/>

                <Button buttonStyle={styleAgencyRE.btn} containerStyle= {styleAgencyRE.footer} onPress={handleContinue}> 
                    <Text style={{ ...styleAgencyRE.textBtn, fontFamily: 'Cairo_700Bold'}}>Registrarse</Text> 
                </Button>
             
        </View>

        </ScrollView>


    </SafeAreaView>
  )
}