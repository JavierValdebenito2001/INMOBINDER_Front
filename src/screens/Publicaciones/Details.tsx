import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import { AddHomeGalleryStyles } from '../AddHome/Gallery/AddHomeGalleryStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName'
import Data from './Data';
import { db }  from '../../../firebase-config.js';
import { doc, getDoc } from "firebase/firestore";

const ancho = Dimensions.get('window').width; 

const Details =({route}: {route: any})=>{

    const { itemId } = route.params;
    
    const [property, setProperty] = useState(null);
    const navigation = useNavigation();

    function handleBack(){
        navigation.navigate(screen.account.MisPublicaciones as never);
    }

    const fetchData = async () => {
        const docRef = doc(db, "properties", itemId);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setProperty(docSnap.data() as any);
        } else {
            console.log("No exista la propiedad!");
        }
    };
    fetchData();

    return(
        <View style={styles.container}>

            <TouchableOpacity style= {styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>
            
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', }}>                
                <View style={styles.containershadow}>
                    
                        <Text style={styles.title}>Propiedad</Text>
                        <View style={{ paddingTop:30, alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:15}}>Propiedad {property?.titulo}</Text>
                            <Text style={{color:'#C1C4CA', marginBottom:20}}>Tipo de propiedad</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={{ uri: property?.imageUrl }} style={styles.avatar} />
                            <TouchableOpacity
                                style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', alignSelf:'center', margin:20, padding:5}}>
                                <Ionicons style={{paddingRight:5, color:'#100'}} size={20} name="pencil-outline"/>
                                <Text style={{color:'#100', fontWeight:'bold'}}>Cambiar foto</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text>Incluye Gastos comunes por : {property?.gastosComunes}</Text>
                            <Text style={{fontWeight:'bold', paddingVertical:10}}>Estado: {property?.estado}</Text>
                            <Text>{property?.metrosCuadrados} Metros Cuadrados Construidos</Text>
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
                            <Text>Dsiponible por: ${property?.precio}</Text>
                            <View style={{flexDirection:'row', }}>
                            <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.habitaciones} Habitaciones</Text>
                            <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.sanitarios} Baños</Text>
                            </View>
                            <Text style={{fontWeight:'bold'}}>Descripcion</Text>
                            
                            <Text>{property?.descripcion}</Text>
                        </View>            
                    </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        marginTop:Constants.statusBarHeight
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        paddingBottom: 5,
        borderBottomWidth:1, 
        width:ancho*0.8,
        textAlign: 'center',    
        paddingTop:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:10
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
        width: 150,
        height: 150,      
        resizeMode: 'contain'
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
        height: "100%",
        borderRadius: 20,
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