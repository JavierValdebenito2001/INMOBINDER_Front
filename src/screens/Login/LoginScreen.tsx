import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { styles } from '../styles';
import { Text, Image } from '@rneui/base';
import { LoginStyles } from './LoginScreenStyles';
import { Ionicons, Entypo, FontAwesome  } from '@expo/vector-icons';
import { Input, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';



// Pantalla de inicio de sesión
export function LoginScreen() {

    const navigation = useNavigation();

    // Cargar fuentes
    const [fontsLoaded] = useFonts({
        Cairo_700Bold,
        Cairo_400Regular,
    });

    // Si las fuentes no están cargadas, se devuelve nulo
    if (!fontsLoaded) {
        return null;
    }

    // Función para manejar el botón de retroceso
    function handleBack(){
       // navigation.navigate(screen.account.home);
    }

    // Función para manejar la activación de la cuenta
    function handleActivation(){
       // navigation.navigate(screen.account.optionRegister);
    }

    // Función para manejar el inicio de sesión
    function handleLogin(){
        console.log("Ingresar")
      
    }

    // Función para manejar el inicio de sesión con Google
    function handleLoginWithGoogle(){
        console.log("Ingresar con Google")
    }

    // Función para manejar la recuperación de contraseña
    function handleRecoverPassword(){
      //  navigation.navigate(screen.account.recoverPassword);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Botón de retroceso */}
            <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
                <Text style={{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
            </TouchableOpacity>

            {/* Encabezado con el logo */}
            <View style={styles.header}>
                <Image source={require('../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
            </View>

            {/* Contenido principal del inicio de sesión */}
            <View style={LoginStyles.containerLogin}>
                <Text style={{ ...LoginStyles.textLogin, fontFamily: 'Cairo_700Bold' }}> Iniciar sesión </Text>
                <Text style={{ ...LoginStyles.text1, fontFamily: 'Cairo_400Regular'}}> ¿No tienes cuenta? <Text style={{fontFamily: 'Cairo_700Bold'}} onPress={handleActivation}>Actívala</Text></Text>        
                <Input placeholder='Correo electrónico' containerStyle={{ ...LoginStyles.input, marginTop: '10%' }} leftIcon={<Entypo name= "email" size={24} />} />
                <Input placeholder='Contraseña' containerStyle={LoginStyles.input} leftIcon={<FontAwesome name='lock' size={30} />} />
                <Text style={{ ...LoginStyles.text2, fontFamily: 'Cairo_400Regular'}}> Mantener la sesión iniciada</Text>
                
                {/* Botón de inicio de sesión */}
                <View>
                    <Button containerStyle={LoginStyles.containerBtn} buttonStyle={LoginStyles.btnStyle} 
                        onPress={() => navigation.navigate('HomeScreen' as never)}>
                        <Text style={{ ...LoginStyles.textBtn, fontFamily: 'Cairo_700Bold'}}>Continuar </Text>
                    </Button>
                    
                    {/* Inicio de sesión con Google */}
                    <TouchableOpacity style={LoginStyles.containerLoginGoogle} onPress={handleLoginWithGoogle}> 
                        <Image source={require('../../../assets/images/google.png')} style={LoginStyles.imgGoogle}/>
                        <Text style={{ ...LoginStyles.loginGoogle, fontFamily: 'Cairo_700Bold'}} > Ingresar con Google</Text>           
                    </TouchableOpacity>

                    {/* Enlace para recuperar contraseña */}
                    <Text style={{ ...LoginStyles.RecoverPassword, fontFamily: 'Cairo_700Bold'}} onPress={handleRecoverPassword} > ¿Has olvidado tu contraseña? </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
