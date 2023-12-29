import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

  const casaVerde = require('../../../assets/images/INMOBINDER-06.png');



export function HomeScreen() {
  const navigation = useNavigation();

  const [origin, setOrigin] = React.useState({

    latitude: -33.451796,
    longitude: -70.667609,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  React.useEffect(() => {
    getLocationPermission();
  }, []);
  
  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    // Utiliza la variable "status" aquí
    if (status !== 'granted') {
      console.log('Permission to access location was denied');

      return;

    } else {

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setOrigin({
        ...origin,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }

 
    return (
      <View style={styles.container}>
        <MapView 
        style={styles.map} 
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        > 
          <Marker 
            draggable={true}
            coordinate={origin}
            onDragEnd={(direction) => setOrigin({
              ...origin,
              latitude: direction.nativeEvent.coordinate.latitude,
              longitude: direction.nativeEvent.coordinate.longitude,
            })}
            title="Mi ubicación"
            description="Mi ubicación actual"
            >
            <Image
              source={casaVerde}
              style={{ width: 30, height: 30 }}
          />
          </Marker>
        </MapView>
      <View style={styles.overlayContainer}>
        <Image source={require('../../../assets/images/INMOBINDER-03.png')} style={styles.logo} />
        <TextInput placeholder=" Buscar" style={styles.inputTexto} />
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
    resizeMode:'center',
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
    borderColor: '#000000', // Dark border color
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
