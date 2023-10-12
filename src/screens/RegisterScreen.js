import { View, Text} from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
import { styles } from './styles.js';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


export function RegisterScreen() {
 
    return (
    <View style= {styles.container}>

        <View style= {styles.header}>
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style= {styles.registerContainer}>

            <Text style= {styles.registerText}> Registrar como: </Text>

            <Button buttonStyle= {styles.registerBtn} containerStyle = {styles.containerBtnRegister}> 
                <View style={styles.optionRegisterText}> 
                     <Text style= {styles.optionRegister}> Persona natural </Text> 
                </View>
             
                <Ionicons name="person" style={styles.iconRegister}/>
             </Button>
           
            <Button buttonStyle= {styles.registerBtn} containerStyle = {styles.containerBtnRegister}>                 
                <View style={styles.optionRegisterText}> 
                    <Text style= {styles.optionRegister}> Inmobiliaria </Text>
                </View>            
                <FontAwesome5 name="home" style= {styles.iconRegister}/>
            </Button>

            <Button buttonStyle= {styles.registerBtn} containerStyle = {styles.containerBtnRegister}> 
                <View style={styles.optionRegisterText}>
                   <Text style= {styles.optionRegister}> Corredor </Text>
                </View>       
                <MaterialCommunityIcons name="sign-real-estate" style={styles.iconRegister} />
            </Button>

        <View style= {styles.footer}> 
            <Text> ¿Ya tienes cuenta? </Text> 
            <Text style={styles.textLogin}> Inicia sesión </Text>
        </View>
        
        </View>
    </View>
  )
}



