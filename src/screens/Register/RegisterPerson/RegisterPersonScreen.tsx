import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import { stylePerson } from './RegisterPersonStyles.tsx'
import { Ionicons } from '@expo/vector-icons';
import { Button, Image } from '@rneui/base';
import { Input , Text} from '@rneui/themed';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName.tsx';


export function RegisterPersonScreen() {

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

    function handleRegisterGoogle(){
        console.log("Registro con google");
    }

    function handleTermsPress(){
        console.log("Terminos y condiciones");
    }

    function handleContinuer(){
        navigation.navigate(screen.account.personIndependient);
    }


      
  return (

    <SafeAreaView style={styles.container}>

        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        <View style={styles.header}> 
            <Image source={require('../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>

        <View style={stylePerson.registerContainer}>

            <Text style= {{ ...stylePerson.registerText, fontFamily: 'Cairo_700Bold'}}> Regístrate gratis </Text>

            <TouchableOpacity style={stylePerson.registerGoogle} onPress={handleRegisterGoogle}> 
                <Image source={require('../../../../assets/images/google.png')} style={stylePerson.Img}/>
                <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 20}}> Registrate con Google</Text>
            </TouchableOpacity>

           
            <Text style={{ ...stylePerson.text, fontFamily: 'Cairo_400Regular'}}> Al hacer clic en Continuar, aceptas los<Text style={{ ...stylePerson.text1, fontFamily: 'Cairo_700Bold'}} onPress={handleTermsPress}> Términos y condiciones de uso </Text>de Inmobinder.</Text>
           
            <View style= {stylePerson.separator} />
                
            
            <Text style={{ ...stylePerson.textRegisterEmail, fontFamily: 'Cairo_700Bold'}}> Registrate con tu correo electrónico </Text>

            <View style= {stylePerson.inputRegisterEmail}> 
                 <Input placeholder='Ingresa el correo electrónico.'/> 
            </View>

            <Button buttonStyle= {stylePerson.btnContinuer} onPress={handleContinuer}> 
                <Text style= {{ ...stylePerson.textBtn, fontFamily: 'Cairo_700Bold'}}> Continuar </Text>
            </Button>

        </View>
      

    </SafeAreaView>
  )
}

