import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import{ firebase } from '../../firebase-config';

    const ancho = Dimensions.get('window').width; 
    const EditProfile =()=>{
    const navigation = useNavigation();
    const user = firebase.auth().currentUser;
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleBack(){
        navigation.navigate(screen.account.EditProfile as never);
    }

    // Actualizar la contraseña del usuario
    const updatePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert('Por favor, complete todos los campos.');
            return;
        }
        if (newPassword !== confirmPassword) {
            Alert.alert('La nueva contraseña y la confirmación no coinciden.');
            return;
        }
        try {
            const userCredentials = firebase.auth.EmailAuthProvider.credential(user?.email ?? '', currentPassword);
            await user?.reauthenticateWithCredential(userCredentials);
            await user?.updatePassword(newPassword);
            Alert.alert('Contraseña actualizada exitosamente.');
            navigation.navigate(screen.account.EditProfile as never);
        } 
        catch (error: any) {
            if (error.code === 'auth/wrong-password') {
                Alert.alert('La contraseña actual no coincide con la almacenada en la base de datos.');
            } else {
                Alert.alert('Error al actualizar la contraseña:', String(error));
            }
        }
    };

    return(
        <View>
            <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.containershadow}>
                
                <Text style={styles.title}>Perfil</Text>
                <Text style={{fontSize:18, fontWeight:'bold', paddingBottom: 20}}>Cambio de Contraseña</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='XXXXXXXXXXXXXXXXXX'
                        onChangeText={(text) => {
                            setCurrentPassword(text);
                        }}
                    />
                    <Text style={styles.Subheading}>Contraseña Actual</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='XXXXXXXXXXXXXXXXXX'
                        onChangeText={(text) => {
                            setNewPassword(text);
                        }}
                    />
                    <Text style={styles.Subheading}>Contraseña Nueva</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='XXXXXXXXXXXXXXXXXX'
                        onChangeText={(text) => {
                            setConfirmPassword(text);
                        }}
                    />
                    <Text style={styles.Subheading}>Confirmar Contraseña</Text>

                </View>

                <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems: 'center', justifyContent:'center', alignSelf: 'flex-end', margin:20, padding:5}}
                    onPress={() => updatePassword(currentPassword, newPassword, confirmPassword)}
                >
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="pencil-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Confirmar Cambios</Text>
                </TouchableOpacity>
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
        textAlign: 'center',
        marginBottom:10
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
    input:{
        height:40,
        borderWidth:2,
        padding:10,
        margin:10,
    },
    containershadow:{
        marginTop: "5%", 
        paddingTop: "5%",
        width: "90%",
        height: "75%",
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
