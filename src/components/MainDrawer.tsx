import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Switch, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { HomeScreen } from '../screens/Home/HomeScreen';
import Dashboard from '../screens/Home/Dashboard';
import Help from '../screens/Home/Help';
import { styles } from './MainDrawerStyles';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <MenuInterno {...props} />}
      initialRouteName='HomeScreen'
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  const [deteccionDinamica, setDeteccionDinamica] = useState(false);

  const toggleDeteccionDinamica = () => {
    // Mensaje a mostrar antes de cambiar el estado
    const mensajeAntes = deteccionDinamica
      ? 'Se han encontrado X propiedades cercanas a ti. ¿Deseas verlas?'
      : 'Detección dinámica desactivada.';
  
    // Opciones de botón antes de cambiar el estado
    const opcionesBotonAntes = deteccionDinamica
      ? [
          {
            text: 'Sí',
            onPress: () => {
              // Agregar lógica para la opción "Sí" aquí
              // Por ejemplo, mostrar propiedades cercanas
              setDeteccionDinamica(true);
  
              // Mostrar mensaje de confirmación
              Alert.alert('Mostrando propiedades cercanas');
  
              // Por ejemplo, navegar a la pantalla de propiedades cercanas
              navigation.navigate('Dashboard');
            },
          },
          {
            text: 'No',
            style: 'cancel',
            onPress: () => {
              // Por ejemplo, desactivar la detección dinámica
              setDeteccionDinamica(false);
  
              // Mostrar mensaje de confirmación
              Alert.alert('Detección dinámica desactivada');
  
              // Volver a la pantalla de inicio
              navigation.navigate('HomeScreen');
            },
          },
        ]
      : undefined; // Cambiado de null a undefined
  
    // Mostrar el mensaje con las opciones antes de cambiar el estado
    Alert.alert(mensajeAntes, '', opcionesBotonAntes as any /* Cambiado de null a any */);
  
    // Cambiar el estado de deteccionDinamica después de mostrar el mensaje
    setDeteccionDinamica((prev) => !prev);
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/Camara.jpg')}
        />
        <Text style={styles.avatarText}>17.111.111-k</Text>
        <Text style={styles.avatarText}>Nombre Nombre Apellido Apellido</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MisPublicaciones')}>
          <Text style={styles.menuTexto}>Mis publicaciones</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddHome')}>
          <Text style={styles.menuTexto}>Añadir propiedad</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('WishProperty')}>
          <Text style={styles.menuTexto}>Propiedad deseada</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Text style={styles.menuTexto}>Mensajes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Text style={styles.menuTexto}>Configuración</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Text style={styles.menuTexto}>Centro de ayuda</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.menuTextoCerrarSesion}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Text style={styles.menuTextoDeteccionDianamica}>
            ¿Desea activar o desactivar la detección dinámica?
          </Text>
          <Switch
            style={styles.switchContainer}
            value={deteccionDinamica}
            onValueChange={toggleDeteccionDinamica}
          />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};