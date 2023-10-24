import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleAgencyRE } from './AgencyREStyle'
import { Input, Button } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons';

export function AgencyREScreen() {
  return (

    <View style= {{justifyContent:'center'}}>

      <View style= {styleAgencyRE.back}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {styles.textBack}> Atrás </Text>
        </View>

        <ScrollView contentContainerStyle = {styleAgencyRE.scrollStyle}> 
        <View style= {styleAgencyRE.header}>
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style = {styleAgencyRE.form}>
            <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%'}}>
                <Text style= {styleAgencyRE.textRegister}> REGISTRO </Text>
            </View>
              

                <Text style= {styleAgencyRE.titulo}> Nombre empresa </Text>
                <Input placeholder='Agartha Marketing Agency' containerStyle={styleAgencyRE.input}/>

                <Text style= {styleAgencyRE.titulo}> RUT empresa </Text>
                <Input placeholder='00.000.000-0' containerStyle={styleAgencyRE.input}/>

                <Text style= {styleAgencyRE.titulo}> Teléfono empresa </Text>
                <Input placeholder='900000000' containerStyle={styleAgencyRE.input}/>

                <Text style= {styleAgencyRE.titulo}> Contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleAgencyRE.input} secureTextEntry={true}/>

                <Text style= {styleAgencyRE.titulo}> Confirmar contraseña </Text>
                <Input placeholder='12345678' containerStyle={styleAgencyRE.input} secureTextEntry={true}/>

                <Button buttonStyle={styleAgencyRE.btn} containerStyle= {styleAgencyRE.footer}> 
                    <Text style={styleAgencyRE.textBtn}>Registrarse</Text> 
                </Button>
             
        </View>

        </ScrollView>


    </View>
  )
}