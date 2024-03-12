import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import { styles } from '../../../styles'
import { styleAgencyRE } from './BrokerageAgencyStyles'
import { Button, Input, Text, Image } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { screen } from '../../../../utils/ScreenName'
import { useNavigation} from '@react-navigation/native'
import {firebase } from '../../../../../firebase-config';
import {validateRut, cleanRut } from 'rutlib'


export function BrokerageAgencyScreen({route}: {route: any}) {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  // Obtener el correo electrónico de la pantalla de registro.
  const correo  = route.params.email;

  const [state, setState] = useState({
    correo: correo,
    nombre: '',
    rut: '',
    teléfono: '',
    password: '',
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleChange = (name: string, value: string | number) => {
    setState({ ...state, [name]: value });
  };

  const handleBack = () => {
    navigation.navigate(screen.account.registerPropertyBroker as never );
  }

  // Función para validar el numero de Telefono
  function validarTelefono(phone: string) {
    const regex = /^\d{9}$/;
    return regex.test(phone);
  }

  const rutYaRegistrado = async (rut: string) => {
    const usuarios = firebase.firestore().collection('users');
    const snapshot = await usuarios.where('rut', '==', rut).get();

    if (snapshot.empty) {
      return false;
    } else {
      return true;
    }
  };

  // Función para Registrar el usuario y ir a la pagina de verificación
  const handleContinue = async (email: string, password: string, name: string, phone: string, rut: string ) => {

    if (!name || !rut || !phone || !email || !password) {
      Alert.alert('Por favor, complete todos los campos.');
      return;
    }

    if (!validateRut(rut)) { // Verificar si el RUT es válido
      Alert.alert('El RUT ingresado no es válido.');
      return;
    }
    if( await rutYaRegistrado(rut)){
      Alert.alert('El RUT ingresado ya está registrado.');
      return;
    }
    if (!validarTelefono(phone)) { // Verificar si el número de teléfono es válido
      Alert.alert('El número de teléfono ingresado no es válido.');
      return;
    }
    const creationDate = new Date(); 
    try {
      await firebase.auth().createUserWithEmailAndPassword(correo, password);
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).set({
        name,
        phone, 
        rut: cleanRut(rut), 
        email, 
        type: 3.1, // 1 para persona natural -- 2 para Inmobiliaria --  3 para corredores independientes -- 3.1 para agencias de corretaje
        status: 0, // 0 para usuario no verificado -- 1 para usuario verificado
        creationDate: creationDate.toDateString()
      });
      Alert.alert('Usuario registrado correctamente.');
      navigation.navigate(screen.account.ProfileVerificationBA as never);
    } catch (error) {
      Alert.alert('Error al registrar el usuario: ' + error);
    }
  }

  return (

    <SafeAreaView style= {{justifyContent:'center'}}>

      <TouchableOpacity style= {styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
          <Text style= {{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle = {styleAgencyRE.scrollStyle}> 

          <View style= {styles.header}>
          <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
          </View>

          <View style = {styleAgencyRE.form}>
            <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%'}}>
              <Text style= {{ ...styleAgencyRE.textRegister, fontFamily: 'Cairo_700Bold'}}> REGISTRO </Text>
            </View>
            
            <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Nombre empresa </Text>
            <Input 
            placeholder='Agartha Marketing Agency' 
            containerStyle={styleAgencyRE.input} 
            onChangeText={(value) => handleChange('nombre', value)}/>

            <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> RUT empresa </Text>
            <Input placeholder='00.000.000-0' 
            containerStyle={styleAgencyRE.input}
            onChangeText={(value) => handleChange('rut', value)}/>

            <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Teléfono empresa </Text>
            <Input placeholder='900000000' 
            containerStyle={styleAgencyRE.input}
            onChangeText={(value) => handleChange('teléfono', value)}/>

            <Text style= {{ ...styleAgencyRE.titulo, fontFamily: 'Cairo_400Regular'}}> Contraseña </Text>
            <Input 
            placeholder='12345678' 
            containerStyle={styleAgencyRE.input} 
            secureTextEntry={true}
            onChangeText={(value) => handleChange('password', value)}/>

            <Button buttonStyle={styleAgencyRE.btn} containerStyle= {styleAgencyRE.footer} onPress={() => handleContinue(state.correo, state.password, state.nombre, state.teléfono, state.rut)}> 
            <Text style={{ ...styleAgencyRE.textBtn, fontFamily: 'Cairo_700Bold'}}>Registrarse</Text> 
            </Button> 
            
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}