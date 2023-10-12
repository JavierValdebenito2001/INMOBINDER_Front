import { View, Text } from 'react-native'
import React from 'react'
import { stylesPerson } from './RegisterPersonStyles'
import { styles } from '../../styles'
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export function RegisterPersonScreen() {
  return (
    <View style={styles.container}>
         <View style= {styles.header}>
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style={stylesPerson.registerPersonContainer}>
            <Text> Regístrate </Text>
            <Text> Registro mediante correo electronico</Text>

        </View>
    </View>

  )
}