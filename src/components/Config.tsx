import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../utils/ScreenName';


const Config =()=>{

    const navigation = useNavigation();

    function handleBack(){
        navigation.navigate(screen.account.MainDrawer);
      }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
        </TouchableOpacity>
            <Text style={styles.title}>Configuracion</Text>
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