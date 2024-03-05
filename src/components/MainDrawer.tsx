import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Switch, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import Dashboard from '../screens/Home/Dashboard';
import Help from '../screens/Home/Help';
import { styles } from './MainDrawerStyles';
import CentroDeAyuda from './CentroDeAyuda';
import { CommonActions, useNavigation } from '@react-navigation/native';
import MapScreen from '../screens/Home/MapScreen';
import{ firebase } from '../../firebase-config';
import { screen } from '../utils/ScreenName';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <MenuInterno {...props} />}
      initialRouteName='MapScreen'
    >
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  const [deteccionDinamica, setDeteccionDinamica] = useState(false);

  const toggleDeteccionDinamica = () => {
    // Cambiar el estado de deteccionDinamica antes de mostrar el mensaje
    setDeteccionDinamica((prev) => !prev);

    // Mensaje a mostrar después de cambiar el estado
    const mensajeDespues = !deteccionDinamica
      ? 'Se han encontrado X propiedades cercanas a ti. ¿Deseas verlas?'
      : 'Detección dinámica desactivada.';

    // Opciones de botón después de cambiar el estado
    const opcionesBotonDespues = !deteccionDinamica
      ? [
          {
            text: 'Sí',
            onPress: () => {
              // Agregar lógica para la opción "Sí" aquí
              // Por ejemplo, mostrar propiedades cercanas
            

              // Por ejemplo, navegar a la pantalla de propiedades cercanas
              navigation.navigate('MisPublicaciones');
            },
          },
          {
            text: 'No',
            style: 'cancel',
            onPress: () => {
              // Agregar lógica para la opción "No" aquí
                 // Mostrar un mensaje al usuario
                Alert.alert('Has elegido no ver las propiedades cercanas.');

                 // Guardar el estado de deteccionDinamica en el almacenamiento persistente
                //AsyncStorage.setItem('deteccionDinamica', JSON.stringify(true));

              // Volver a la pantalla de inicio
              navigation.navigate('MapScreen');
            },
          },
        ]
      : undefined;

    // Mostrar el mensaje con las opciones después de cambiar el estado
    Alert.alert(mensajeDespues, '', opcionesBotonDespues as any);
  

  };

  //

  const cerrarSesion = () => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: screen.account.login }, 
          ],
        })
      ); 
    }).catch((error) => {
      Alert.alert('Sign out error', error);
    });
  };

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

//Recuperar nombre y rut del usuario
const [name, setName] = useState('');
const [rut, setRut] = useState('');
const [lastname, setLastname] = useState('');
const user = firebase.auth().currentUser;
const docRef = firebase.firestore().collection('users').doc(user?.uid);
const [userPhotoUrl, setUserPhotoUrl] = useState(''); 


docRef.get().then((doc) => {
  if (doc.exists) {
    setName(doc.get('name'));
    setRut(formatRut(doc.get('rut'))); // Formatear el RUT antes de establecerlo
    setLastname(doc.get('lastname'));
  } else {
    Alert.alert("No such document!");
  }
}).catch((error) => {
    Alert.alert("Error getting document:", error);
});

useEffect(() => {
  const fetchUserPhotoUrl = async () => {
      const user = firebase.auth().currentUser;
      const storageRef = firebase.storage().ref(`userPhotos/${user?.uid}`);
      const url = await storageRef.getDownloadURL();
      setUserPhotoUrl(url);
  };

  fetchUserPhotoUrl();
}, []);

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
            style={styles.avatar}
            source={{ uri: userPhotoUrl || '../../assets/images/Camara.jpg' }}
        />
        <TouchableOpacity style={{position:'absolute', alignSelf:'flex-end', marginVertical: 90, width: 80 }} onPress={() => navigation.navigate('Profile')}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>Ver perfil</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 10}}>
        <Text style={styles.avatarText}>{rut}
        </Text>
        <Text style={styles.avatarText}>{name} {lastname}	
        </Text>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Mensajes')}>
          <Text style={styles.menuTexto}>Mensajes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Config')}>
          <Text style={styles.menuTexto}>Configuración</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CentroDeAyuda')}>
          <Text style={styles.menuTexto}>Centro de ayuda</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={cerrarSesion}>
        <Text style={styles.menuTextoCerrarSesion}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Text style={styles.menuTextoDeteccionDianamica}>
            ¿Desea activar o desactivar la detección dinámica?
          </Text>
          <View style={{ alignItems: 'center' }}>
          
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};