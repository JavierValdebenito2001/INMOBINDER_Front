import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image, handlePress } from 'react-native'


const Register = () => {
   /* const navigation = useNavigation();
    function handleBack() {
        navigation.navigate(screen.account.MainDrawer);
    }*/
    return (
        <View style={styles.contenedor}>
            {/* Encabezado con el logo */}
      <View style={styles.header}>
        <Image source={require('./Data/INMOBINDER-03.png')} style={styles.imgLogo} />
      </View>
            
        <View style={styles.cuadrado}>
          <Text style={styles.titulo}>Registrar como:</Text>
          <TouchableOpacity style={styles.rectangulo} onPress={() => handlePress('Persona natural')}>
          <Text style={styles.textoBlanco}>Persona natural</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangulo} onPress={() => handlePress('Inmobiliaria')}>
          <Text style={styles.textoBlanco}>Inmobiliaria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangulo} onPress={() => handlePress('Corredor')}>
          <Text style={styles.textoBlanco}>Corredor</Text>
        </TouchableOpacity>
        <Text style={styles.textoPregunta}>Ya tienes cuenta?</Text>
        <TouchableOpacity style={styles.textoInicio} onPress={() => handlePress('CInici')}>
          <Text style={styles.textoInicio}>Inicia Sesion</Text>
        </TouchableOpacity>
        
        </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
      contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgLogo: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        paddingTop:10
      },

      cuadrado: {
        width: 300, // anchura
        height: 320, // altura
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopWidth: 2, // Grosor de la línea superior (simulando la sombra)
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        paddingVertical: 20,
        paddingHorizontal: 10, // Espacio horizontal entre los bordes del cuadrado y los rectángulos
      },
      titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      rectangulo: {
        height: 45,
        width: 150,
        backgroundColor: '#00008B',
        borderRadius: 10,
        left: 60,
        marginBottom: 10,
      },
      textoBlanco: {
        color: 'white',
        textAlign: 'center',
        top: 11,
        fontWeight: 'bold',
        fontSize: 15,
      },
      textoPregunta: {
        textAlign: 'center',
        marginTop: 10,
        right: 50
      },    
      textoInicio:  {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 5,
        left: 72,
        bottom: 14, 
      },

    }
    );
export default Register