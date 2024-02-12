import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList} from 'react-native'
import Constants from 'expo-constants'
import { AddHomeGalleryStyles } from '../AddHome/Gallery/AddHomeGalleryStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName'
import { useRoute } from '@react-navigation/native';
import { firebase } from '../../../firebase-config.js';

const ancho = Dimensions.get('window').width; 
const alto = Dimensions.get('window').height; 


const Details =()=>{

    const route = useRoute();
    const { itemId } = route.params;
    const navigation = useNavigation();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            const propertyDocument = await firebase.firestore()
                .collection('properties')
                .doc(itemId)
                .get();
            
            if (propertyDocument.exists) {
                setProperty({ id: propertyDocument.id, ...propertyDocument.data() });
            }
        };

        fetchProperty();
    }, []);

    if (!property) {
        return null;
    }

    function handleBack(){
        navigation.navigate(screen.account.MisPublicaciones);
      }
    


    return(
<View style={styles.container}>
        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
        </TouchableOpacity>
        
    <View style={styles.containershadow}>
            <Text style={styles.title}>Propiedad</Text>
            <View style={{ paddingTop:30, alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:15}}>Propiedad {property.Titulo}</Text>
                <Text style={{color:'#C1C4CA', marginBottom:20}}>Tipo de propiedad</Text>
            </View>
                <View style={{flexDirection:'row'}}>
                {property?.imageUrls && property?.imageUrls.length > 0 && <Image source={{uri: property.imageUrls[0]}} style={styles.avatar}/>}
                    <TouchableOpacity
                        style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', alignSelf:'center', margin:20, padding:5}}>
                        <Ionicons style={{paddingRight:5, color:'#100'}} size={20} name="pencil-outline"/>
                        <Text style={{color:'#100', fontWeight:'bold'}}>Cambiar foto</Text>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text>Incluye Gastos comunes por :{property.GastosComunes}</Text>
                    <Text style={{fontWeight:'bold', paddingVertical:10}}>Estado:{property.Estado}</Text>
                    <Text>{property.MetrosCuadrados}</Text>
                    <Text style={{fontWeight:'bold', paddingTop:20, paddingVertical:5}}>Direccion</Text>
                    <Text>{property.Direccion}</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginHorizontal:40, marginVertical:15}}>
                    <Text style={{fontWeight:'bold'}}>Region</Text>
                    <Text>{property.regionSelected}</Text>
                        </View>
                        <View style={{marginHorizontal:40, marginVertical:15}}>
                    <Text style={{fontWeight:'bold'}}>Comuna</Text>
                    <Text>{property?.comunaSelected}</Text>
                        </View>
                    </View>
                    <Text>Disponible por: {property?.Precio}</Text>
                    <View style={{flexDirection:'row', }}>
                    <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.Habitaciones}</Text>
                    <Text style={{fontWeight:'bold', paddingHorizontal:40, paddingVertical:15}}>{property?.Sanitarios}</Text>
                    </View>
                    <Text style={{fontWeight:'bold'}}>Descripcion</Text>
                    
                    <Text>{property?.Descripcion}</Text>
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