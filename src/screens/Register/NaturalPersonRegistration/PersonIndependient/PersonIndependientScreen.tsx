import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { styles } from '../../../styles';
import { styleIndependient } from './PersonIndependientScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Text, Image } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../../utils/ScreenName';
import {firebase } from '../../../../../firebase-config';
import {validateRut, cleanRut } from 'rutlib'

export function PersonIndependientScreen({route}: {route: any}) {

  // Inicializar la navegación
  const navigation = useNavigation();

  // Cargar fuentes
  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  // Obtener el correo electrónico de la pantalla de registro.
  const correo  = route.params.email;

  // Estado local para almacenar los valores de los campos de entrada
  const [state, setState] = useState({
    correo: correo,
    nomb: '',
    apellido: '',
    rut: '',
    telefono: '',
    clave: '',
  });

  // Verificar si las fuentes están cargadas
  if (!fontsLoaded) {
    return null;
  }

  // Función para manejar la navegación hacia atrás
  const handleBack = () => {
    navigation.navigate(screen.account.registerPerson as never);
  };

  // Función para manejar cambios en los campos de entrada y actualizar el estado
  const handleChange = (name: string, value: string | number) => {
    setState({ ...state, [name]: value });
  };

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
  const handleContinue = async (email: string, password: string, name: string, lastname: string , phone: string, rut: string ) => {

    if (!name || !rut || !lastname || !phone || !email || !password) {
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
        lastname, 
        phone, 
        rut: cleanRut(rut), 
        email, 
        type: 1, // 1 para persona natural -- 2 para Inmobiliaria --  3 para corredores  
        status: 0, // 0 para usuario no verificado -- 1 para usuario verificado
        creationDate: creationDate.toDateString()
      });
      Alert.alert('Usuario registrado correctamente.');
      navigation.navigate(screen.account.ProfileVerificationNPScreen as never);
    } catch (error) {
      Alert.alert('Error al registrar el usuario: ' + error);
    }
  }

  // Renderizar el componente
  return (
    <SafeAreaView style={{ justifyContent: 'center' }}>

      {/* Botón para navegar hacia atrás */}
      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
        <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 24 }}> atrás </Text>
      </TouchableOpacity>

      {/* Área de desplazamiento para el formulario */}
      <ScrollView contentContainerStyle={styleIndependient.scrollStyle}>

        {/* Encabezado con el logo */}
        <View style={styles.header}>
          <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>

        {/* Formulario de registro */}
        <View style={styleIndependient.form}>
          {/* Título del formulario */}
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%' }}>
            <Text style={{ ...styleIndependient.textRegister, fontFamily: 'Cairo_700Bold' }}> REGISTRO </Text>
          </View>

          {/* Campos de entrada con la función onChangeText para manejar cambios */}
          <Text style={{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular' }}> Nombres </Text>
          <Input
            placeholder="Lionel Andrés"
            containerStyle={styleIndependient.input}
            onChangeText={(value) => handleChange('nomb', value)}
          />

          <Text style={{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular' }}> Apellidos </Text>
          <Input
            placeholder="Messi Cuccitini"
            containerStyle={styleIndependient.input}
            onChangeText={(value) => handleChange('apellido', value)}
          />

          <Text style={{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular' }}> RUT </Text>
          <Input
            placeholder="00.000.000-0"
            containerStyle={styleIndependient.input}
            onChangeText={(value) => handleChange('rut', value)}
          />

          <Text style={{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular' }}> Teléfono </Text>
          <Input
            placeholder="900000000"
            containerStyle={styleIndependient.input}
            onChangeText={(value) => handleChange('telefono', value)}
          />

          <Text style={{ ...styleIndependient.titulo, fontFamily: 'Cairo_400Regular' }}> Contraseña </Text>
          <Input
            placeholder="12345678"
            containerStyle={styleIndependient.input}
            secureTextEntry={true}
            onChangeText={(value) => handleChange('clave', value)}
          />

          {/* Botón para continuar */}
          <Button buttonStyle={styleIndependient.btn} containerStyle={styleIndependient.footer} 
            onPress={() => handleContinue(state.correo, state.clave, state.nomb, state.apellido, state.telefono, state.rut)}>
            <Text style={styleIndependient.textBtn}>Registrarse</Text>
          </Button>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
