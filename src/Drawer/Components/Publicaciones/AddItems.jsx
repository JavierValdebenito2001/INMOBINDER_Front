import React from "react";
import {View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SelectList } from 'react-native-dropdown-select-list'


const alto = Dimensions.get('window').height;


const AddItems = () => {

    const [selected, setSelected] = React.useState([]);
    const data = [
        {key:'1', value:'Disponible'},
        {key:'2', value:'No disponible'},
    
    ]
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containershadow}>
                <Text style={styles.title}>Titulo</Text>
                <View style={{backgroundColor:'#CCC4C2', alignItems: 'center', padding:50}}>
                    <MaterialCommunityIcons name='camera' size={50} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{textAlignVertical:'center'}}>Incluye gastos comunes por</Text>
                    <TextInput keyboardType="numeric" placeholder='$xx.xxx' style={styles.textinput}/>
                </View>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value" 
                    placeholder="Estado"
                    search={false}
                    maxHeight={100}
                />
                <Text>Metros cuadrados construidos</Text>
                <TextInput style={styles.textinput}/>
                <Text>Direccion</Text>
                <TextInput style={styles.textinputLarge}/>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <TouchableOpacity >
                        <Text style={styles.button}>Comuna</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.button}>Region</Text>
                    </TouchableOpacity>
                </View>

                <Text>Disponible por</Text>
                <TextInput style={styles.textinput}/>

                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <TouchableOpacity >
                        <Text style={styles.button}>Habitaciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.button}>Baños</Text>
                    </TouchableOpacity>
                </View>
                <Text>Descripcion</Text>
                <TextInput style={styles.textinputLarge}/>
            </View>
        </SafeAreaView>
    )
}   

export default AddItems;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    containershadow:{    
        width: "90%",
        flex:0.99,
        height: "80%",
        borderRadius: 20,
        height:alto*0.75,
        alignSelf: "center",
        alignItems:'center',
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
title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20,
    paddingTop:5
},
textinput:{
    width: '25%',
    height: 30,
    borderWidth:2,
    margin:10,
    borderRadius:10,
    paddingLeft: 10,
},
textinputLarge:{
    width: '75%',
    height: 30,
    borderWidth:2,
    margin:5,
    borderRadius:10,
    paddingLeft: 10,
},
button:{
    width:120,
    height: 40,
    padding:10,
    margin:10,
    borderRadius:10,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'#CCC4C2',
    textAlign:'center',
    textAlignVertical:'center'
}
})