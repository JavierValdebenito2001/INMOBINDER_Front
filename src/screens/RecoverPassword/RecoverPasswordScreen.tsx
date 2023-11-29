import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { Ionicons, Entypo, FontAwesome  } from '@expo/vector-icons';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import React from 'react'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName';
import { styleRecoverPassword } from './RecoverPasswordScreenStyles';
import { Image, Input, Button } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function RecoverPasswordScreen() {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        Cairo_700Bold,
        Cairo_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }



    function handleBack(){
        navigation.navigate(screen.account.home);
    }




    //APLICAR EL STATUSBAR EN TODAS LAS VENTANAS 


  return (

    <>
     <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} /> 
        <SafeAreaView style={{ ...styles.container, paddingTop: StatusBar.currentHeight}}> 
        
        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style={{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        
        <View style= {styles.header}>
            <Image source={require('../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>

        <View style={styleRecoverPassword.container}> 

            <Text style= {{ ...styleRecoverPassword.title, fontFamily: 'Cairo_700Bold'}}> Reestablecer contraseña </Text>
            <View style={{borderColor: 'rgb(0,0,0)', borderBottomWidth: 1, width: '90%', marginTop: '3%'}}/> 

            <View style = {{ margin: '2%'}}> 
                <Text style= {{ ...styleRecoverPassword.text1, fontFamily: 'Cairo_700Bold'}}>Para reestalecer su contraseña, ingrese el email asociado a su cuenta y siga las instrucciones</Text>
            </View>
            
            <Input placeholder='Ingresa el correo electronico'/> 

            <Button> <Text> Enviar </Text></Button>

            <View> 
                <Text> ¿Te acordaste de tu contraseña? </Text>
                <Text> Prueba <Text>iniciando sesion.</Text></Text>
            </View>

          





        </View>









    </SafeAreaView>
    </>
  )
}