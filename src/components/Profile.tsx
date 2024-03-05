import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import{ firebase } from '../../firebase-config';
import { Numeric } from 'i18n-js';

const ancho = Dimensions.get('window').width; 

const Profile =()=>{

    const navigation = useNavigation();
    const user = firebase.auth().currentUser;
    const docRef = firebase.firestore().collection('users').doc(user?.uid); 
    const [isLoading, setIsLoading] = useState(true);
    
    docRef.get().then((doc) => {
        if (doc.exists) {
            setName(doc.get('name'));
            setRut(formatRut(doc.get('rut'))); 
            setLastname(doc.get('lastname'));
            setTelefono(doc.get('phone'));
            setEmail(doc.get('email'));
            setCreatedAt(doc.get('creationDate'));       
            setTipoUser(TipoUserName(doc.get('type')));
            setEstadouser(doc.get('status'));
            
        } else {
            Alert.alert("No such document!");

        }
        setIsLoading(false);
        }).catch((error) => {
            Alert.alert("Error getting document:", error);
        setIsLoading(false);
        });

    const [name, setName] = useState('');
    const [rut, setRut] = useState('');
    const [lastname, setLastname] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [createdAt, setCreatedAt] = useState(''); 
    const [tipoUser, setTipoUser] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState(''); 
    const [estadouser, setEstadouser] = useState('');


function TipoUserName (tipoUser: Numeric){
    if (tipoUser === 1){
        return 'Persona Natural'
    }
    else if (tipoUser === 2){
        return 'Inmobiliaria'
    }
    else if (tipoUser === 3){
        return 'Corredor de Propiedades'
    }
    else{
        return 'Usuario no definido'
    }
}
function EstadoUser(estadouser: Numeric){
    if (estadouser === 1){
        return '[Usuario Verificado]'
    }
    else{
        return '[Usuario no Verificado]'
    }
}

function formatRut(rut: number) {
    let rutStr = rut.toString();
    let rutBody = rutStr.slice(0, -1);
    let rutDv = rutStr.slice(-1);
    let rutFormat = '';
    let count = 0;
    for (let i = rutBody.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) {
        rutFormat = '.' + rutFormat;
    }
    rutFormat = rutBody.charAt(i) + rutFormat;
    count++;
    }
    rutFormat = rutFormat + '-' + rutDv;
    return rutFormat;
    }

function handleBack(){
    navigation.navigate(screen.account.MainDrawer as never);
}

function EditProfile(){
    navigation.navigate(screen.account.EditProfile as never);
}
    useEffect(() => {
    const fetchUserPhotoUrl = async () => {
        const user = firebase.auth().currentUser;
        const storageRef = firebase.storage().ref(`userPhotos/${user?.uid}`);
        const url = await storageRef.getDownloadURL();
        setUserPhotoUrl(url);
    };

    fetchUserPhotoUrl();
    }, []);

return(
    <View>
        {isLoading ? (
            <View>
            <Text>Cargando...</Text>
            </View>
        ) : (
            <React.Fragment> 
                <TouchableOpacity style={styles.back} onPress={handleBack}>
                    <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                    <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
                </TouchableOpacity>

                <View style={styles.containershadow}>
                    <Text style={styles.title}>Perfil</Text>
                    <View style={{alignItems:'center'}}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: userPhotoUrl || '../../assets/images/Camara.jpg' }}
                        />
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons style={{ paddingRight: 5 }} size={30} name="calendar-outline" />
                                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Fecha en que se unió</Text>
                            </View>
                            <View style={{alignItems: 'center', marginLeft: 20}}>
                                <Text style={{color:'#DDE0E5', fontSize:12}}>{createdAt}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={styles.verificationlogo}
                                source={require('../../assets/images/verification.png')}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{EstadoUser(estadouser)}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.input}> {name} {lastname}</Text>
                        <Text style={styles.input}> {email} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.miniinput}> {telefono} </Text>
                        <Text style={styles.miniinput}> {rut} </Text>
                    </View>
                    <View style={{ paddingTop:30, alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:15, paddingBottom:20}}>Registrado como:</Text>
                        <Text style={{fontWeight:'bold', fontSize:30, color:'#C1C4CA'}}>[{tipoUser}]</Text>
                    </View>
                    <TouchableOpacity
                        onPress={EditProfile}
                        style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}>
                        <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="pencil-outline"/>
                        <Text style={{color:'#100', fontWeight:'bold'}}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )}
    </View>
)}
export default Profile

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
        width: 100,
        height: 100,   
        padding: 10,  
        borderRadius: 50,
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
        paddingTop:10,
    }
})
