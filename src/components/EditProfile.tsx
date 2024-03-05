import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import{ firebase } from '../../firebase-config';
import {launchImageLibrary } from 'react-native-image-picker';

    const ancho = Dimensions.get('window').width; 
    const EditProfile =()=>{
    const navigation = useNavigation();
    const user = firebase.auth().currentUser;
    const docRef = firebase.firestore().collection('users').doc(user?.uid);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState(''); 


    function handleBack(){
        navigation.navigate(screen.account.profile as never);
    }

    function validarTelefono(phone: string) {
        const regex = /^\d{9}$/;
        return regex.test(phone);
    }

    // Actualizar la información del usuario
    const updateUser = async (name: string, lastname: string, telefono: string , email: string) => {
        
        if (!name || !lastname || !telefono || !email) {
            Alert.alert('Por favor, complete todos los campos.');
            return;
        }
        if (!validarTelefono(telefono)) { 
            Alert.alert('El número de teléfono ingresado no es válido.');
            return;
        }
        try {
            docRef.update({
                name: name,
                lastname: lastname,
                phone: telefono,
                email: email
            })
            .then(() => {
                Alert.alert("¡Documento actualizado exitosamente!");
            })
        } catch (error) {
            Alert.alert("Error al actualizar el documento: ", String(error));
        }
    };

    // Función para seleccionar una imagen de la galería y subirla a Firebase
    const selectImageAndUpload = () => {
        launchImageLibrary({ mediaType: 'photo' }, async (response) => {
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets[0].uri) {
            const user = firebase.auth().currentUser;
            const storageRef = firebase.storage().ref(`userPhotos/${user?.uid}`);
            const blob = await fetch(response.assets[0].uri).then(r => r.blob());
        
            storageRef.put(blob).then(async () => {
                console.log('Image uploaded to Firebase Storage');
                const url = await storageRef.getDownloadURL();
                setUserPhotoUrl(url); 

            }).catch((error) => {
                console.log('Error uploading image: ', error);
            });
            }
        });
    }; 

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
            <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.containershadow}>
                <Text style={styles.title}>Perfil</Text>

                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'flex-start', paddingLeft:50, marginBottom: 10}}>Foto de perfil</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' , marginBottom: 10, marginLeft: 20}}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: userPhotoUrl || '../../assets/images/Camara.jpg' }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate(screen.account.verification as never)}>
                        <Image
                            style={styles.verificationlogo}
                            source={require('../../assets/images/verification.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#ADAFB2', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20, padding: 5 }}
                        onPress={selectImageAndUpload}
                    >
                        <Ionicons style={{ paddingRight: 5, color: '#100' }} size={30} name="image" />
                        <Text style={{ color: '#100', fontWeight: 'bold' }}>Seleccionar foto</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre Nombre Apellido Apellido'
                        onChangeText={(text) => {
                            const names = text.split(' '); 
                            setName(`${names[0]} ${names[1] || ''}`);
                            setLastname(`${names[2] || ''} ${names[3] || ''}`);
                        }}
                    />
                    <Text style={styles.Subheading}>Nombre Completo</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Nombre_apellido@hotmail.com'
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                    />
                    <Text style={styles.Subheading}>Correo Electrónico</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <TextInput
                            style={styles.miniinput}
                            placeholder='9 00000000'
                            onChangeText={(text) => {
                                setTelefono(text);
                            }}
                        />
                        <Text style={styles.Subheading}>Telefono</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:15, padding:5}}
                    onPress={() => updateUser(name, lastname, telefono, email)}
                >
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="person-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Editar Información</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:5}}>
                        <TextInput
                            style={styles.miniinput}
                            placeholder='XXXXXXXXXXX'
                        />
                        <Text style={styles.Subheading}>Contraseña</Text>
                    </View>

                    <TouchableOpacity
                        style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}
                        onPress={() => navigation.navigate(screen.account.EditPasword as never)}
                    >
                        <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="key-sharp"/>
                        <Text style={{color:'#100', fontWeight:'bold'}}>Editar Contraseña</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EditProfile

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
        top: 10,
        marginLeft: -30,
        position: 'absolute',
        resizeMode: 'contain'

    }
})
