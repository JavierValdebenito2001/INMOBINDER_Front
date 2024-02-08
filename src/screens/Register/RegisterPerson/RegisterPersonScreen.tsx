import React, { useState } from 'react';
import { View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { styles } from '../../styles';
import { stylePerson } from './RegisterPersonStyles.tsx';
import { Ionicons } from '@expo/vector-icons';
import { Button, Image, Input, Text, registerCustomIconType } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName.tsx';
import {firebase } from '../../../../firebase-config.js';

export function RegisterPersonScreen() {
  // Inicializar la navegación
  const navigation = useNavigation();

  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [rut, setRut] = React.useState('')
  registerUser = async (email, password, name, phone, rut, type, status) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).set({name, phone, rut, email, type:'1', status:'0' });
      Alert.alert('Usuario registrado correctamente.');
    } catch (error) {
      Alert.alert('Error al registrar el usuario: ' + error.message);
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      // Cargar fuentes
  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });


  // Verificar si las fuentes están cargadas
  if (!fontsLoaded) {
    return null;
  }

  // Función para manejar la navegación hacia atrás
  const handleBack = () => {
    navigation.navigate(screen.account.optionRegister as never);
  };

  return (
    <SafeAreaView style={styles.container}>


        {/* Registro con correo electrónico */}
        <Text style={{ ...stylePerson.textRegisterEmail, fontFamily: 'Cairo_700Bold' }}>
          Regístrate con tu correo electrónico
        </Text>

        {/* Campo de entrada de correo electrónico */}
        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingresa el correo electrónico.' onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingrese una contraseña' onChangeText={(text) => setPassword(text)} />
        </View>

        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingresa tu nombre.' onChangeText={(text) => setName(text)} />
        </View>

        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingresa tu numero de telefono.' onChangeText={(text) => setPhone(text)} />
        </View>

        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingresa tu rut.' onChangeText={(text) => setRut(text)} />
        </View>

        {/* Botón para continuar */}
        <Button buttonStyle={stylePerson.btnContinuer} onPress={() => registerUser(email, password, name, phone, rut)}>
          <Text style={{ ...stylePerson.textBtn, fontFamily: 'Cairo_700Bold' }}> Continuar </Text>
        </Button>

    </SafeAreaView>
  );
}
