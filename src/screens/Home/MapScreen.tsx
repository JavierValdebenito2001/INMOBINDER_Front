import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react'
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env';
import ArriendoImage from '../../../assets/images/Arriendo.png';
import VentaImage from '../../../assets/images/Venta.png';
import ArriendoYVentaImage from '../../../assets/images/ArriendoYVenta.png';


export default function MapScreen() {


  // Estado para almacenar la ubicación actual
  const [origin, setOrigin] = React.useState({
    latitude: -36.611228,
    longitude: -72.100980,
  })
  // Estado para almacenar la ubicación de destino
  const [destination, setDestination] = React.useState({
    latitude: -36.605294,
    longitude: -72.102584,
  })

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

        
        {/*
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor="green"
        />
      */}
      </MapView>
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
  }
});