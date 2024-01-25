
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

const Config =()=>{

    return(
        
        <View style={styles.container}>
            {/*
            <Text style={styles.title}>Configuracion</Text>*/}
             <View>
                <TouchableOpacity>
                <Text style={styles.text}>Inicio de sesion y seguridad</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Pagos y cobros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Accesibilidad</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Notificaciones</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Terminos de servicio</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Politica de privacidad</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
    
}

const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        alignSelf:'center',
        marginBottom:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:20
    },
    back:{
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        marginRight: "auto",
        alignItems: "center",
      },
    logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
      },
})

export default Config