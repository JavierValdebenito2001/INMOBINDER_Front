import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const WishProperty = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.touchable}>
                    <Text>Arrendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Precio</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <TextInput style={styles.textinputbutton} placeholder="Desde" />
                <TextInput style={styles.textinputbutton} placeholder="Hasta" />
            </View>

            <Text style={styles.title}>Dormitorios</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <TextInput style={styles.textinputbutton} placeholder="Desde" />
                <TextInput style={styles.textinputbutton} placeholder="Hasta" />
            </View>

            <Text style={styles.title}>Baños</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <TextInput style={styles.textinputbutton} placeholder="Desde" />
                <TextInput style={styles.textinputbutton} placeholder="Hasta" />
            </View>

            <Text style={styles.title}>Gastos Comunes</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <TextInput style={styles.textinputbutton} placeholder="Desde" />
                <TextInput style={styles.textinputbutton} placeholder="Hasta" />
            </View>

            <Text style={styles.title}>Metros Construidos</Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <TextInput style={styles.textinputbutton} placeholder="Desde" />
                <TextInput style={styles.textinputbutton} placeholder="Hasta" />
            </View>
       
        </View>
    );
}

export default WishProperty;

const styles = StyleSheet.create({
    buttoncontainer: {
        flexDirection: 'row',
        alignSelf:'center',
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#CEC9C8',
        borderRadius: 25,
        marginVertical:15,
        marginBottom:5
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    touchable:{
        marginHorizontal:20,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:15,
    },
    textinputbutton:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#CEC9C8',
        borderRadius:15,
        marginHorizontal:20,
        width:'35%',
    }
});