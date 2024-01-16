import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList} from 'react-native'
import Constants from 'expo-constants'
import { AddHomeGalleryStyles } from '../AddHome/Gallery/AddHomeGalleryStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName'
import Data from './Data';
import { useRoute } from '@react-navigation/native';

const ancho = Dimensions.get('window').width; 
const alto = Dimensions.get('window').height; 


const Details =()=>{

    const route = useRoute();
    const { itemId } = route.params;
    const navigation = useNavigation();

    function handleBack(){
        navigation.navigate(screen.account.MisPublicaciones);
      }
    
      const property = Data.find((property) => property.id === itemId);

    return(
        <View style={styles.container}>
            <TouchableOpacity style= {styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>
            
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
                <View>
                    <Text>Incluye Gastos comunes por :{property?.gc}</Text>
                    <Text>Estado:{property?.estado}</Text>
                    <Text>{property?.mcc}</Text>
                    <Text>Direccion</Text>
                    <Text>Region</Text>
                    <Text>{property?.region}</Text>
                    <Text>Comuna</Text>
                    <Text>{property?.comuna}</Text>
                    <Text>Dsiponible por: {property?.precio}</Text>
                    <Text>{property?.habitaciones}</Text>
                    <Text>{property?.baños}</Text>
                    <Text>Descripcion</Text>
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
        width:ancho*0.7,
        textAlign: 'center',    
        paddingTop:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:20
    },
    logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
      },
    back:{
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        marginRight: "auto",
        alignItems: "center",
        },
    avatar: {
        backgroundColor: '#DDE0E5',
        width: 125,
        height: 125,      
        borderRadius: 50,
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
})

export default Details