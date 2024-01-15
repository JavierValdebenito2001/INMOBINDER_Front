import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const casaVerde = require('../../../assets/images/INMOBINDER-06.png');
const casaRoja = require('../../../assets/images/INMOBINDER-04.png');
const casaMixta = require('../../../assets/images/INMOBINDER-05.png');

interface LocationState {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
  title?: string;
  description?: string;
}

export function MapScreen() {
  const navigation = useNavigation();

  const [origin, setOrigin] = useState<LocationState>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const [ubicacionCasaVerde, setUbicacionCasaVerde] = useState<LocationState | undefined>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    title: 'Casa Verde',
    description: 'Ubicación de la casa verde',
  });

  const [ubicacionCasaRoja, setUbicacionCasaRoja] = useState<LocationState | undefined>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    title: 'Casa Roja',
    description: 'Ubicación de la casa roja',
  });

  const [ubicacionCasaMixta, setUbicacionCasaMixta] = useState<LocationState | undefined>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    title: 'Casa Mixta',
    description: 'Ubicación de la casa mixta',
  });

  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setUbicacionCasaVerde({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        title: 'Casa Verde',
        description: 'Ubicación de la casa verde',
      });

      setUbicacionCasaMixta({
        latitude: location.coords.latitude + 0.001,
        longitude: location.coords.longitude + 0.001,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        title: 'Casa Mixta',
        description: 'Ubicación de la casa mixta',
      });

      setUbicacionCasaRoja({
        latitude: location.coords.latitude - 0.001,
        longitude: location.coords.longitude - 0.001,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        title: 'Casa Roja',
        description: 'Ubicación de la casa roja',
      });

      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }

  const handleGoToLocation = (location: LocationState | undefined) => {
    if (location) {
      // Muestra los detalles de la casa directamente en MapScreen
      //alert(`Detalles de la casa: ${location.title}\n${location.description}`);
      // También puedes navegar a otra pantalla si lo prefieres
      // navigation.navigate('CasaScreen', { location });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: origin.latitude || 0,
          longitude: origin.longitude || 0,
          latitudeDelta: origin.latitudeDelta || 0.005,
          longitudeDelta: origin.longitudeDelta || 0.005,
        }}
        showsUserLocation={true}
      >
        <Marker
          draggable={true}
          coordinate={ubicacionCasaVerde || { latitude: 0, longitude: 0 }}
          onDragEnd={(direction) =>
            setUbicacionCasaVerde((prevLocation) => {
              if (prevLocation) {
                return {
                  ...prevLocation,
                  latitude: direction.nativeEvent.coordinate.latitude,
                  longitude: direction.nativeEvent.coordinate.longitude,
                };
              }
              return prevLocation;
            })
          }
          title="Casa Verde"
          description="Ubicación de la casa verde"
        >
          <Image source={casaVerde} style={{ width: 30, height: 30 }} />
        </Marker>
        <Marker
          draggable={true}
          coordinate={ubicacionCasaMixta || { latitude: 0, longitude: 0 }}
          onDragEnd={(direction) =>
            setUbicacionCasaMixta((prevLocation) => {
              if (prevLocation) {
                return {
                  ...prevLocation,
                  latitude: direction.nativeEvent.coordinate.latitude,
                  longitude: direction.nativeEvent.coordinate.longitude,
                };
              }
              return prevLocation;
            })
          }
          title="Casa Mixta"
          description="Ubicación de la casa Mixta"
        >
          <Image source={casaMixta} style={{ width: 30, height: 30 }} />
        </Marker>
        <Marker
          draggable={true}
          coordinate={ubicacionCasaRoja || { latitude: 0, longitude: 0 }}
          onDragEnd={(direction) =>
            setUbicacionCasaRoja((prevLocation) => {
              if (prevLocation) {
                return {
                  ...prevLocation,
                  latitude: direction.nativeEvent.coordinate.latitude,
                  longitude: direction.nativeEvent.coordinate.longitude,
                };
              }
              return prevLocation;
            })
          }
          title="Casa Roja"
          description="Ubicación de la casa roja"
        >
          <Image source={casaRoja} style={{ width: 30, height: 30 }} />
        </Marker>
      </MapView>

      <View style={styles.overlayContainer}>
        <Image source={require('../../../assets/images/INMOBINDER-03.png')} style={styles.logo} />
        <TextInput placeholder=" Buscar" style={styles.inputTexto} />

        <TouchableOpacity onPress={() => handleGoToLocation(ubicacionCasaVerde)}>
          <Text>Ir a Casa Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoToLocation(ubicacionCasaRoja)}>
          <Text>Ir a Casa Roja</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoToLocation(ubicacionCasaMixta)}>
          <Text>Ir a Casa Mixta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    borderColor: '#000000',
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
