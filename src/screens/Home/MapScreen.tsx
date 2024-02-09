import { View, Text, StyleSheet, Alert } from 'react-native'
import * as Location from 'expo-location'
import * as React from 'react'
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env';
import ArriendoImage from '../../../assets/images/Arriendo.png';
import VentaImage from '../../../assets/images/Venta.png';
import ArriendoYVentaImage from '../../../assets/images/ArriendoYVenta.png';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export default function MapScreen() {


  // Estado para almacenar la ubicación actual
  const [origin, setOrigin] = React.useState({
    latitude: -37.723066,
    longitude: -72.237227,
  })
  // Estado para almacenar la ubicación de destino
  const [destination, setDestination] = React.useState({
    latitude: -36.605294,
    longitude: -72.102584,
  })
  const [arriendo, setArriendo] = React.useState({
    latitude: -37.273062,
    longitude: -72.715934,
  })

  const [joaco, setjoaco] = React.useState({
    latitude: -36.822411,
    longitude: -73.047658,
  })

  const [nico, setnico] = React.useState({
    latitude: -36.803737,
    longitude: -73.097912,
  })

  React.useEffect(() => {
    getLocationpermission();
  }, [])


  // Función para obtener permiso de ubicación
  async function getLocationpermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      Alert.alert('Permiso a la ubicación denegado');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(current);
  }


  return (
    <View style={style.container}>

      <MapView
        style={style.map}
        // esta es la ubicación inicial del mapa 
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      // Aquí se muestran los marcadores de origen y destino
      >
        <Marker
          draggable
          coordinate={origin}
          onDragEnd={(Direction) => setOrigin({ latitude: Direction.nativeEvent.coordinate.latitude, longitude: Direction.nativeEvent.coordinate.longitude })}
        >
          <Image source={ArriendoImage} style={{ height: 30, width: 30 }} />
        </Marker>

        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(Direction) => setDestination({ latitude: Direction.nativeEvent.coordinate.latitude, longitude: Direction.nativeEvent.coordinate.longitude })}
        >
          <Image source={VentaImage} style={{ height: 30, width: 30 }} />
        </Marker>

        <Marker
          draggable
          coordinate={arriendo}
          onDragEnd={(Direction) => setArriendo({ latitude: Direction.nativeEvent.coordinate.latitude, longitude: Direction.nativeEvent.coordinate.longitude })}
        >
          <Image source={ArriendoYVentaImage} style={{ height: 30, width: 30 }} />
        </Marker>

        <Marker
          draggable
          coordinate={joaco}
          onDragEnd={(Direction) => setjoaco({ latitude: Direction.nativeEvent.coordinate.latitude, longitude: Direction.nativeEvent.coordinate.longitude })}
        >
          <Image source={VentaImage} style={{ height: 30, width: 30 }} />
        </Marker>

        <Marker
          draggable
          coordinate={nico}
          onDragEnd={(Direction) => setnico({ latitude: Direction.nativeEvent.coordinate.latitude, longitude: Direction.nativeEvent.coordinate.longitude })}
        >
          <Image source={ArriendoYVentaImage} style={{ height: 30, width: 30 }} />
        </Marker>


      </MapView>

      <View style={style.legend}>
        <Image source={VentaImage} style={{ height: 30, width: 30 }} />
        <Text style={style.legendText}>Propiedad en venta</Text>
      </View>
      <View style={[style.legend, { bottom: 70 }]}>
        <Image source={ArriendoImage} style={{ height: 30, width: 30 }} />
        <Text style={style.legendText}>Propiedad en arriendo</Text>
      </View>

      <View style={[style.legend, { bottom: 125 }]}>
        <Image source={ArriendoYVentaImage} style={{ height: 30, width: 30 }} />
        <Text style={style.legendText}>En venta y arriendo</Text>
      </View>


    </View>


  )
}
// Estilos
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  legend: {
    position: 'absolute', // Esto hace que se posicione encima del mapa
    bottom: 15, // Posiciona en la parte inferior de la pantalla
    right: 10, // Posiciona a la derecha de la pantalla
    flexDirection: 'row', // Alinea los elementos horizontalmente
    backgroundColor: '#D7DBDD', // Fondo blanco 
    padding: 10, // Espacio alrededor del texto y la imagen
    borderRadius: 20, // Bordes redondeados
    elevation: 5, // Sombra 
    alignItems: 'center', // Alinea los elementos verticalmente
    width: 190, // Ancho
    height: 45, // Alto
  },
  legendText: {
    marginLeft: 10,
  },
});