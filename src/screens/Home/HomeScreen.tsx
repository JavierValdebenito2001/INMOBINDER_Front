// Importaciones necesarias desde bibliotecas y módulos externos
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker, Region } from 'react-native-maps';

// Ruta de la imagen del marcador personalizado
const casaVerde = require('../../../assets/images/INMOBINDER-06.png');

// Definición de la interfaz para el estado de ubicación
interface LocationState {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

// Componente principal de la pantalla Home
export function HomeScreen() {
  // Obtener la referencia de navegación
  const navigation = useNavigation();

  // Estado para almacenar la información de la ubicación en el mapa
  const [origin, setOrigin] = useState<LocationState>({
    latitude: -33.451796,
    longitude: -70.667609,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  // Efecto secundario para obtener permisos de ubicación al montar el componente
  useEffect(() => {
    getLocationPermission();
  }, []);

  // Función asincrónica para obtener permisos de ubicación y actualizar la ubicación actual
  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    } else {
      // Obtener la ubicación actual
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      // Actualizar el estado con la ubicación actual
      setOrigin({
        ...origin,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }

  // Renderizado de la pantalla
  return (
    <View style={styles.container}>
      {/* Mapa que muestra la ubicación actual y un marcador */}
      <MapView
        style={styles.map}
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        // boton de localizacion
       // showsUserLocation={true}
      >
        {/* Marcador en el mapa */}
        <Marker
          // El marcador es arrastrable
          draggable={true}
          coordinate={origin}
          // Maneja el evento de arrastre del marcador y actualiza la posición
          onDragEnd={(direction) =>
            setOrigin({
              ...origin,
              latitude: direction.nativeEvent.coordinate.latitude,
              longitude: direction.nativeEvent.coordinate.longitude,
            })
          }
          title="Mi ubicación"
          description="Mi ubicación actual"
        >
          {/* Imagen del marcador personalizado */}
          <Image source={casaVerde} style={{ width: 30, height: 30 }} />
        </Marker>
      </MapView>

      {/* Superposición que contiene un logo y un campo de entrada de texto */}
      <View style={styles.overlayContainer}>
        <Image
          source={require('../../../assets/images/INMOBINDER-03.png')}
          style={styles.logo}
        />
        <TextInput placeholder=" Buscar" style={styles.inputTexto} />
      </View>
    </View>
  );
}

// Estilos definidos utilizando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'center',
    marginBottom: 1,
  },
  inputTexto: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 500,
    borderWidth: 2,
    borderColor: '#000000', // Borde oscuro
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
