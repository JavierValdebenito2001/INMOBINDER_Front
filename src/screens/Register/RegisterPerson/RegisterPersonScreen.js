import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import { stylePerson } from './RegisterPersonStyles'
import { Ionicons } from '@expo/vector-icons';
import { Button, Image } from '@rneui/base';
import { Input } from '@rneui/themed';

export function RegisterPersonScreen() {
  return (
    <View style={styles.container}>

        <View style= {stylePerson.back}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {styles.textBack}> Atráss </Text>
        </View>

        <View style={stylePerson.header}> 
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style={stylePerson.registerContainer}>

            <Text style= {stylePerson.registerText}> Regístrate gratis </Text>

            <View style={stylePerson.registerGoogle}> 
                <Image source={require('../../../../assets/images/google.png')} style={stylePerson.Img}/>
                <Text style={stylePerson.GoogleText}> Registrate con Google</Text>
            </View>

            <Text style={stylePerson.text}> Al hacer clic en Continuar, aceptas los <Text style={stylePerson.text1}>Términos y condiciones de uso </Text>de Inmobinder.</Text>
           
            <View style= {stylePerson.separator} />
                
            
            <Text style={stylePerson.textRegisterEmail}> Registrate con tu correo electrónico </Text>

            <View style= {stylePerson.inputRegisterEmail}> 
                 <Input placeholder='Ingresa el correo electrónico.'/> 
            </View>

            <Button buttonStyle= {stylePerson.btnContinuer}> 
                <Text style= {stylePerson.textBtn}> Continuar </Text>
            </Button>

        </View>
      

    </View>
  )
}

