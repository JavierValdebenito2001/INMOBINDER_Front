import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleIndependient } from './PersonIndependientScreenStyles'
import { Ionicons } from '@expo/vector-icons';
import { Button, Input } from '@rneui/base';

export function PersonIndependientScreen() {
  return (
    
    <View style= {{justifyContent:'center'}}>

        <View style= {styleIndependient.back}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {styles.textBack}> Atrás </Text>
        </View>

        <ScrollView contentContainerStyle = {styleIndependient.scrollStyle}> 
        <View style= {styleIndependient.header}>
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>
        
        <View style = {styleIndependient.form}>
            <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%'}}>
                <Text style= {styleIndependient.textRegister}> REGISTRO </Text>
            </View>
              

                <Text style= {styleIndependient.titulo}> Nombres </Text>
                <Input placeholder='Lionel Andrés' containerStyle={styleIndependient.input}/>

                <Text style= {styleIndependient.titulo}> Apellidos </Text>
                <Input placeholder='Messi Cuccitini' containerStyle={styleIndependient.input}/>

                <Text style= {styleIndependient.titulo}> RUT </Text>
                <Input placeholder='00.000.000-0' containerStyle={styleIndependient.input}/>

                <Text style= {styleIndependient.titulo}> Teléfono </Text>
                <Input placeholder='900000000' containerStyle={styleIndependient.input}/>

                <Text style= {styleIndependient.titulo}> Contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleIndependient.input} secureTextEntry={true}/>

                <Text style= {styleIndependient.titulo}> Confirmar contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleIndependient.input} secureTextEntry={true}/>

                <Button buttonStyle={styleIndependient.btn} containerStyle= {styleIndependient.footer}> 
                    <Text style={styleIndependient.textBtn}>Registrarse</Text> 
                </Button>
             
        </View>

       

        </ScrollView>
    </View>
  )
}