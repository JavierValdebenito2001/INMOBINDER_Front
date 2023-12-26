import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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
    flex: 1,
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
