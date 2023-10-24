import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleRealEstate } from './RegisterRealEstateStyles'
import { Ionicons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';

export function RegisterRealEstateScreen() {
  return (

    <View style={styles.container}>

        <View style= {styleRealEstate.back}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {styles.textBack}> Atrás </Text>
         </View>

         <View style= {styleRealEstate.header}>
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

         <View style= {styleRealEstate.container}>
            <Text style= {styleRealEstate.textRegister}> Regístrate </Text>
            <Text style= {styleRealEstate.textRegisterEmail}> Registro mediante correo electrónico</Text>
            <Input placeholder='Ingresa el correo electrónico.' containerStyle={styleRealEstate.inputEmail}/>
            <Text style={styleRealEstate.text}> Al hacer clic en Continuar, aceptas los <Text style={styleRealEstate.text1}>Términos y condiciones de uso </Text>de Inmobinder.</Text>

            <Button containerStyle={styleRealEstate.containerBtn} buttonStyle={styleRealEstate.btnStyle}>
                <Text style={styleRealEstate.textBtn}> Continuar</Text>
            </Button>
         
         </View>

        
          
      


    </View>

  )
}