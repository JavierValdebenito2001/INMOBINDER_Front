import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList} from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Data from './Data.js';
import { useRoute } from '@react-navigation/native';


const ancho = Dimensions.get('window').width; 
const alto = Dimensions.get('window').height; 


const Details =()=>{

    const route = useRoute();
    const { itemId } = route.params;
    const navigation = useNavigation();

    
      const property = Data.find((property) => property.id === itemId);

    return(
        <View style={styles.container}>
            
        <View style={styles.containershadow}>
                <Text style={styles.title}>Propiedad</Text>
                <View style={{ paddingTop:30, alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>Propiedad {itemId}</Text>
                    <Text style={{color:'#C1C4CA', marginBottom:20}}>Tipo de propiedad</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={property?.imagen} style={styles.avatar}/>
                    <TouchableOpacity
                        style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', alignSelf:'center', margin:20, padding:5}}>
                        <Ionicons style={{paddingRight:5, color:'#100'}} size={20} name="pencil-outline"/>
                        <Text style={{color:'#100', fontWeight:'bold'}}>Cambiar foto</Text>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text>Incluye Gastos comunes por :{property?.gc}</Text>
                    <Text style={{fontWeight:'bold', paddingVertical:10}}>Estado:{property?.estado}</Text>
                    <Text>{property?.mcc}</Text>
                    <Text style={{fontWeight:'bold', paddingTop:20, paddingVertical:5}}>Direccion</Text>
                    <Text>{property?.direccion}</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:40, marginVertical:15}}>
                    <Text style={{fontWeight:'bold'}}>Region</Text>
                    <Text>{property?.region}</Text>
                        </View>
                        <View style={{marginHorizontal:40, marginVertical:15}}>
                    <Text style={{fontWeight:'bold'}}>Comuna</Text>
                    <Text>{property?.comuna}</Text>
                        </View>
                    </View>
                    <Text>Dsiponible por: {property?.precio}</Text>
                    <View style={{flexDirection:'row', }}>
                    <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.habitaciones}</Text>
                    <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.baños}</Text>
                    </View>
                    <Text style={{fontWeight:'bold'}}>Descripcion</Text>
                    
                    <Text>{property?.descripcion}</Text>
                </View>
                
                
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
        paddingBottom:15,
        borderBottomWidth:1, 
        width:ancho*0.8,
        textAlign: 'center',    
        paddingTop:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:20
    },
    avatar: {
        width: 200,
        height: 150,      
        resizeMode: 'contain'
    },
    imagen: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        marginBottom: 10,
      },
    input:{
        height:40,
        borderWidth:2,
        padding:10,
        margin:10
    },
    miniinput:{
        height:40,
        width: ancho*0.3,
        borderWidth:2,
        padding:10,
        margin:10
    },
    containershadow:{    
        width: "90%",
        height: "70%",
        borderRadius: 20,
        height:alto*0.85,
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
})

export default Details