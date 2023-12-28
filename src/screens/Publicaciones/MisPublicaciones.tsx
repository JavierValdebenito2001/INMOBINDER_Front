import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const publicacionesData = [
  {
    id: "1",
    titulo: "Propiedad 1",
    imagen: require("../../../assets/images/propiedad1.png"),
    precio: "$100,000",
    direccion: "Calle Principal, Ciudad",
  },
  {
    id: "2",
    titulo: "Propiedad 2",
    imagen: require("../../../assets/images/propiedad2.png"),
    precio: "$150,000",
    direccion: "Otra Calle, Otra Ciudad",
  },

];

const MisPublicacionesScreen: React.FC = () => {
  const [showDeleteIcons, setShowDeleteIcons] = useState(false);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.publicacionContainer}>
      <Image source={item.imagen} style={styles.imagen} />
      <View style={styles.contenidoCentrado}>
        <Text style={styles.subtitulo}>{`Propiedad #${item.id}`}</Text>
        <Text style={styles.precio}>{item.precio}</Text>
        <Text style={styles.direccion}>{item.direccion}</Text>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => handleDetalles(item)}
        >
            
          <Text style={styles.textoBoton}> <FontAwesome name="edit" size={12} color="black" /> Ver Detalles</Text>
        </TouchableOpacity>
        {showDeleteIcons && (
          <TouchableOpacity
            style={styles.eliminarIconContainer}
            onPress={() => handleEliminarPropiedad(item.id)}
          >
            <FontAwesome name="trash" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const handleDetalles = (item: any) => {
    console.log(`Detalles de la propiedad ${item.id}`);
  };

  const handleEliminarPropiedad = (id: string) => {
    console.log(`Propiedad eliminada: ${id}`);
  };

  const handleToggleDeleteIcons = () => {
    setShowDeleteIcons(!showDeleteIcons);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={publicacionesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.titulo}>Listado de Propiedades</Text>
        )}
      />
      <TouchableOpacity style={styles.botonEliminar} onPress={handleToggleDeleteIcons}>
        <FontAwesome name="trash" size={24} color="black" />
        <Text style={styles.textoBotonEliminar}>Eliminar propiedad</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  publicacionContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  imagen: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  contenidoCentrado: {
    alignItems: "center",
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  iconoLapiz: {
    marginRight: 5,
  },
  precio: {
    color: '#0EAF0A',
    fontSize: 18,
    marginBottom: 5,
  },
  direccion: {
    fontSize: 16,
    marginBottom: 10,
  },
  boton: {
    width: 98,
    height: 26,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textoBoton: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  eliminarIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  botonEliminar: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textoBotonEliminar: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default MisPublicacionesScreen;

