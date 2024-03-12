import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import{ firebase } from '../../firebase-config';

const ancho = Dimensions.get('window').width; 

const Verification =()=>{

    const navigation = useNavigation();
    const user = firebase.auth().currentUser;
    const docRef = firebase.firestore().collection('users').doc(user?.uid);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [typeuser, setTypeuser] = useState(0); // 1 para persona natural -- 2 para Inmobiliaria --  3 para corredores
    const [estadouser, setEstadouser] = useState(0);

    docRef.get().then((doc) => {
        if (doc.exists) {
            setName(doc.get('name'));
            setLastname(doc.get('lastname'));
            setEstadouser(doc.get('status'));     
            setTypeuser(doc.get('type'));
            } else {
            Alert.alert("No such document!");
        }
        }).catch((error) => {
            Alert.alert("Error getting document:", error);
        });

    function EstadoUser(estadouser: number){
        if (estadouser === 1){
            return '[Usuario Verificado]'
        }
        else{
            return '[Usuario no Verificado]'
        }
    }

    function handleBack(){
        navigation.navigate(screen.account.profile as never);
    }

    return(
        <View>
            <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.containershadow}>
                <Text style={styles.title}>Perfil</Text>

                <Text style={{fontSize:18, fontWeight:'bold', marginBottom: 10}}>Verificacion de Cuenta</Text>

                <Image
                        style={styles.avatar}
                        source={require('../../assets/images/agarthalogo.png')}
                    />
                <Text style={{fontSize:18, marginBottom: 10, color: 'rgba(113, 113, 113, 1)'}}>{EstadoUser(estadouser)}</Text>
                <Text style={{fontSize:14, marginBottom: 10, textAlign: "center", paddingHorizontal: "10%" }}>
                    ¡La cuenta “{name} {lastname}” no realizó el proceso de verificación!</Text>

                <TouchableOpacity
                        style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}
                        onPress={() => {
// 1 para persona natural -- 2 para Inmobiliaria --  3 para corredores independientes -- 3.1 para agencias de corretaje
                            switch(typeuser) {
                                case 1:
                                    navigation.navigate(screen.account.ProfileVerificationNPScreen as never);
                                    break;
                                case 2:
                                    navigation.navigate(screen.account.ProfileVerificationRE as never);
                                    break;
                                case 3:
                                    navigation.navigate(screen.account.ProfileVerificationScreen as never);
                                    break;
                                case 3.1:
                                    navigation.navigate(screen.account.ProfileVerificationBA as never);
                                    break;
                                default:
                                    console.log('Tipo de usuario desconocido');
                            }
                        }}
                    >
                        <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100', height: 50}} size={40} name="person-sharp"/>
                        <Text style={{color:'#100', fontWeight:'bold'}}>Realizar Verificacion</Text>
                    </TouchableOpacity>

                <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}
                    onPress={() => navigation.navigate(screen.account.EditProfile as never)}
                >
                    <Ionicons style={{paddingRight:5, alignItems:'center', textAlign: "center", color:'#100', height: 50}} size={40} name="person-circle-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Volver al Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        marginBottom:20,
        paddingBottom:15,
        borderBottomWidth:1, 
        width:ancho*0.7,
        textAlign: 'center'    
    },
    Subheading:{
        fontWeight:'bold',
        marginTop:-5,
        textAlign: 'center'
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
        width: 120,
        height: 120,
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
        height: "88%",
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
    verificationlogo:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        position: 'absolute',
        top: 65,
        marginLeft: 70
    }
})
