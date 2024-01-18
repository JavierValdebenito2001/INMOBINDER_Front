import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TypeLogin = () => {

const navigation = useNavigation();

const goToLogin = () => {
    navigation.navigate('Login');
};



    return (
    <View style={styles.container}>
        <Image style={{width:120, height:120, alignSelf:'center'}} source={require('./Data/INMOBINDER-03.png')}/>
        <View style={styles.background}>
            <Text style={{fontWeight:'bold', marginVertical:20, fontSize:20}}>Tipo de usuario</Text>
            <TouchableOpacity style={styles.containerbuttons} onPress={goToLogin}>
                    <Text style={styles.text}>Persona natural</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbuttons} >
                    <Text style={styles.text}>Corredor Independiente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbuttons} >
                    <Text style={styles.text}>Agencia de corretaje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbuttons} >
                    <Text style={styles.text}>Inmobiliaria</Text>
            </TouchableOpacity>
        </View>
    </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    background:{   
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'space-between',
        width: width*0.8,
        height: height*0.5,
        borderRadius: 20,
        shadowOpacity: 1,
        paddingBottom:20,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowColor: "rgba(0, 0, 0, 1)",
            backgroundColor: 'rgb(255, 255, 255)',
    },
    containerbuttons:{
        width: width*0.6,
        height: 60,
        borderRadius: 20,
        borderWidth:1.5,
        alignSelf: "center",
        alignItems: "center",
        justifyContent:'center',
       
    },
})

export default TypeLogin