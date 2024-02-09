import React, { useState } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from '../../../styles.tsx';
import { stylePerson } from './RegisterPersonStyles.tsx';
import { Ionicons } from '@expo/vector-icons';
import { Button, Image, Input, Text } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../../utils/ScreenName.tsx';

export function RegisterPersonScreen() {
  // Inicializar la navegación
  const navigation = useNavigation();

  // Cargar fuentes
  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  // Estado local para almacenar el valor del campo de entrada
  const [email, setEmail] = useState('');

  // Verificar si las fuentes están cargadas
  if (!fontsLoaded) {
    return null;
  }

  // Función para manejar la navegación hacia atrás
  const handleBack = () => {
    navigation.navigate(screen.account.optionRegister as never);
  };

  // Función para manejar el registro con Google
  const handleRegisterGoogle = () => {
    console.log("Registro con Google");
  };

  // Función para manejar la presión de "Términos y condiciones"
  const handleTermsPress = () => {
    console.log("Términos y condiciones");
  };

  // Función para manejar la navegación hacia la pantalla de registro independiente
  const handleContinuer = () => {
    // Imprimir el valor del campo de entrada en la consola
    console.log('Correo electrónico:', email);

    // Navegar a la siguiente pantalla (puede ser a la pantalla de registro independiente en tu caso)
    navigation.navigate(screen.account.personIndependient as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón para navegar hacia atrás */}
      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
        <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 24 }}> atrás </Text>
      </TouchableOpacity>

      {/* Encabezado con el logo */}
      <View style={styles.header}>
        <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
      </View>

      {/* Contenido principal del registro */}
      <View style={stylePerson.registerContainer}>
        <Text style={{ ...stylePerson.registerText, fontFamily: 'Cairo_700Bold' }}> Regístrate gratis </Text>

        {/* Botón para registrar con Google */}
        <TouchableOpacity style={stylePerson.registerGoogle} onPress={handleRegisterGoogle}>
          <Image source={require('../../../../../assets/images/google.png')} style={stylePerson.Img} />
          <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 20 }}> Regístrate con Google</Text>
        </TouchableOpacity>

        {/* Texto y enlace a "Términos y condiciones" */}
        <Text style={{ ...stylePerson.text, fontFamily: 'Cairo_400Regular' }}>
          Al hacer clic en Continuar, aceptas los
          <Text style={{ ...stylePerson.text1, fontFamily: 'Cairo_700Bold' }} onPress={handleTermsPress}>
            {' '}
            Términos y condiciones de uso{' '}
          </Text>
          de Inmobinder.
        </Text>

        <View style={stylePerson.separator} />

        {/* Registro con correo electrónico */}
        <Text style={{ ...stylePerson.textRegisterEmail, fontFamily: 'Cairo_700Bold' }}>
          Regístrate con tu correo electrónico
        </Text>

        {/* Campo de entrada de correo electrónico */}
        <View style={stylePerson.inputRegisterEmail}>
          <Input placeholder='Ingresa el correo electrónico.' onChangeText={(value) => setEmail(value)} />
        </View>

        {/* Botón para continuar */}
        <Button buttonStyle={stylePerson.btnContinuer} onPress={handleContinuer}>
          <Text style={{ ...stylePerson.textBtn, fontFamily: 'Cairo_700Bold' }}> Continuar </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
