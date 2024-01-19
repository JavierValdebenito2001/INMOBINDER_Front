import { View, TouchableOpacity, SafeAreaView, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const LoginMain =()=> {

const navigation = useNavigation();

const goToLogin = () => {
    navigation.navigate('TypeLogin');
};
const goToRegister = () => {
    navigation.navigate('Register');
};
  
  return (
    <View style={{flex:1, justifyContent:'space-between', backgroundColor:'#fff'}}>
      {/* Encabezado con el logo */}
        <View style={styles.container}>
            <Image source={require('./Data/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>
        
            <View>
                <TouchableOpacity style={styles.containerbuttons} onPress={goToLogin}>
                    <Text style={styles.text}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.containerbuttons} onPress={goToRegister}>
                    <Text style={styles.text}>Registrate</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
                <Image source={require('./Data/image.png')} style={{width:60, height:60}}/>
                <Text style={{fontWeight:'bold'}}>Creado por Agartha</Text>
            </View>
    </View>
  )
}

export default LoginMain;

const styles = StyleSheet.create({

    containerbuttons:{    
        width: '80%',
        height: 60,
        borderRadius: 20,
        marginVertical:-90,
        borderWidth:1.5,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:'center',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
            
    },
    container:{
        alignItems: "center",
        marginTop: Constants.statusBarHeight * 2,
        marginBottom: 20
    },
    imgLogo:{
        width: 300,
        height: 300,

    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
        textAlign: 'center'}
});

