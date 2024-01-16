import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const Mensajes = () => {
    return (
<View style = {styles.container}>
  <Text style = {styles.title} >Mensajes</Text>
  <View style = {styles.subcontainer}>
  <TouchableOpacity style={styles.chat}>
        <Image source={require('C:\Users\betan\Downloads\Fotoprueba.jpg')} style={styles.avatar} />
        <View style={styles.InnerOval}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
        <Image source={require('C:\Users\betan\Downloads\Fotoprueba.jpg')} style={styles.avatar} />
          <View style={styles.InnerOval}></View>
        </TouchableOpacity>
  </View>
</View>
    )
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 40, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subcontainer: {
        height: 50, 
        width:'100%',
        paddingVertical: 20,
        borderRadius: 100,
    },
    chat: {
        width: 400,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#2F4F4F',
        position: 'relative',
    },
    InnerOval: {
        width: 250, // Ancho del óvalo interior
        height: 50, // Altura del óvalo interior
        backgroundColor: '#A9A9A9', // Color del óvalo interior
        borderRadius: 50, // Ajusta el valor para que sea la mitad del ancho o altura para que sea un óvalo
        position: 'absolute', // Posiciona el óvalo interior en relación con el contenedor exterior
        top: 50, // Ajusta según tus necesidades para centrar verticalmente
        right: 35,
      }, 
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 20,   
    },
});
export default Mensajes
