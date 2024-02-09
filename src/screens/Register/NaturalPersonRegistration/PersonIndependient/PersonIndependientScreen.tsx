import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../../styles';
import { styleIndependient } from './PersonIndependientScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Text, Image } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../../utils/ScreenName';

export function PersonIndependientScreen() {
  // Inicializar la navegación
  const navigation = useNavigation();

  // Cargar fuentes
  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  // Estado local para almacenar los valores de los campos de entrada
  const [state, setState] = useState({
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

  // Función para manejar la navegación hacia adelante (puede ser a la página de inicio en tu caso)
  const handleContinue = () => {
    console.log('Valores del estado:', state);

    navigation.navigate(screen.account.ProfileVerificationNPScreen as never);
  };

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
          <Button buttonStyle={styleIndependient.btn} containerStyle={styleIndependient.footer} onPress={handleContinue}>
            <Text style={styleIndependient.textBtn}>Registrarse</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
