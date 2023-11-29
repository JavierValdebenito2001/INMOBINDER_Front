import { View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleIndependient } from './PersonIndependientScreenStyles'
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Text, Image } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../../utils/ScreenName';


export function PersonIndependientScreen() {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Cairo_700Bold,
        Cairo_400Regular,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    function handleBack(){
      navigation.navigate(screen.account.registerPerson);
    }

    function handleContinue(){
      console.log("Continuar");
    }

  return (
    
    <SafeAreaView style= {{justifyContent:'center'}}>

        <TouchableOpacity style= {styles.back} onPress={handleBack}>
             <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle = {styleIndependient.scrollStyle}> 
        
        <View style= {styles.header}>
        <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>
        
        <View style = {styleIndependient.form}>
            <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%'}}>
                <Text style= {{ ...styleIndependient.textRegister, fontFamily: 'Cairo_700Bold'}}> REGISTRO </Text>
            </View>
              

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> Nombres </Text>
                <Input placeholder='Lionel Andrés' containerStyle={styleIndependient.input}/>

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> Apellidos </Text>
                <Input placeholder='Messi Cuccitini' containerStyle={styleIndependient.input}/>

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> RUT </Text>
                <Input placeholder='00.000.000-0' containerStyle={styleIndependient.input}/>

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> Teléfono </Text>
                <Input placeholder='900000000' containerStyle={styleIndependient.input}/>

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> Contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleIndependient.input} secureTextEntry={true}/>

                <Text style= {{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular'}}> Confirmar contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleIndependient.input} secureTextEntry={true}/>

                <Button buttonStyle={styleIndependient.btn} containerStyle= {styleIndependient.footer} onPress={handleContinue}> 
                    <Text style={styleIndependient.textBtn}>Registrarse</Text> 
                </Button>
             
        </View>

       

        </ScrollView>
    </SafeAreaView>
  )
}