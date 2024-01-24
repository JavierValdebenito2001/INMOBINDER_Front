import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'

const Mensajes = () => {


    return (
        <View style={styles.container2}>
            <View style={styles.container}>
                <Text style={styles.title} >Mensajes</Text>
                <View style={styles.subcontainer}>
                    <TouchableOpacity style={styles.chat}>
                        <View style={styles.InnerOval}>
                            <Text style={styles.messageText}>3 mensajes nuevos</Text>
                        </View>
                        <View style={styles.innerCircle}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat}>
                        <View style={styles.InnerOval}>
                            <Text style={styles.messageText}>2 mensajes nuevos</Text>
                        </View>
                        <View style={styles.innerCircle}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat}>
                        <View style={styles.InnerOval}>
                            <Text style={styles.messageText}>3 mensajes nuevos</Text>
                        </View>
                        <View style={styles.innerCircle}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat}>
                        <View style={styles.InnerOval}>
                            <Text style={styles.messageText}>1 mensajes nuevos</Text>
                        </View>
                        <View style={styles.innerCircle}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat}>
                        <View style={styles.InnerOval}>
                            <Text style={styles.messageText}>4 mensajes nuevos</Text>
                        </View>
                        <View style={styles.innerCircle}></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
        
    },
    container2: {
        marginTop: Constants.statusBarHeight
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subcontainer: {
        height: 50,
        width: '100%',
        paddingVertical: 20,
        borderRadius: 100,
    },
    chat: {
        width: 400,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#A9A9A9',
        position: 'relative',
    },
    InnerOval: {
        width: 250, // Ancho del óvalo interior
        height: 50, // Altura del óvalo interior
        backgroundColor: '#A9A9A9', // Color del óvalo interior
        borderRadius: 50, // Ajusta el valor para que sea la mitad del ancho o altura para que sea un óvalo
        justifyContent: 'center', // Alinea el texto al centro verticalmente
        alignItems: 'center',
        position: 'absolute', // Posiciona el óvalo interior en relación con el contenedor exterior
        top: 35, // Ajusta según tus necesidades para centrar verticalmente
        right: 25,
    },
    innerCircle: {
        width: 80,
        height: 80,
        backgroundColor: '#A9A9A9',
        borderRadius: 50,
        position: 'absolute',
        top: 20,
        left: 30,
    },
    messageText: {
        color: 'black', // Cambia el color del texto según tus necesidades
        fontSize: 16,
    },

});
export default Mensajes