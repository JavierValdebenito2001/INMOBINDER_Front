import React, { useEffect, useState } from "react";
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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/ScreenName";
import { styles } from "../styles";
import { firebase, db }  from '../../../firebase-config.js';
import { getDocs, collection, query, where } from 'firebase/firestore';

const MisPublicacionesScreen: React.FC = () => {

  const userId = firebase.auth().currentUser?.uid;
  const [showDeleteIcons, setShowDeleteIcons] = useState(false);

  const fetchData = async () => {
    // Obtiene una referencia a la colección de propiedades
    const propertiesRef = collection(db, "properties");

    // Crea una consulta para obtener solo las propiedades del usuario logeado
    const queryRef = query(propertiesRef, where("userId", "==", userId));

    // Obtiene todos los documentos que cumplen con la consulta
    const snapshot = await getDocs(queryRef);

    // Crea un array para almacenar las propiedades
    const properties: { id: string; [key: string]: any }[] = [];

    // Itera sobre los documentos y agrega cada propiedad al array
    snapshot.forEach((doc) => {
      properties.push({ id: doc.id, ...doc.data() });
    });

    // Actualiza el estado de las propiedades
    setProperties(properties);
  };

  const [properties, setProperties] = useState<{ id: string; [key: string]: any }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(properties);
  const renderItem = ({ item }: { item: any }) => (

    <View key={item.id} style={PublicacionStyles.publicacionContainer}>
      
      <Image source={{ uri: item.imageUrl }} style={PublicacionStyles.imagen} />

      <View style={PublicacionStyles.contenidoCentrado}>
        <Text style={PublicacionStyles.subtitulo}>{`Propiedad ${item.titulo}`}</Text>
        <Text style={PublicacionStyles.precio}>{`$${item.precio}`}</Text>
        <Text style={PublicacionStyles.direccion}>{item.direccion}</Text>
        <TouchableOpacity
          style={PublicacionStyles.boton}
          onPress={() => verdetalles(item.id)}
        >
          <Text style={PublicacionStyles.textoBoton}>
            {" "}
            <FontAwesome name="edit" size={12} color="black" /> Ver Detalles
          </Text>
        </TouchableOpacity>
        {showDeleteIcons && (
          <TouchableOpacity
            style={PublicacionStyles.eliminarIconContainer}
            onPress={() => handleEliminarPropiedad(item.id)}
          >
            <FontAwesome name="trash" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const navigation = useNavigation();

  function verdetalles(itemId: string) {
    console.log(`Ver detalles de la propiedad: ${itemId}`);
    navigation.navigate('Details', { itemId: itemId });
  }

  const handleEliminarPropiedad = (id: string) => {
    console.log(`Propiedad eliminada: ${id}`);
  };

  const handleToggleDeleteIcons = () => {
    setShowDeleteIcons(!showDeleteIcons);
  };

  function handleBack() {
    navigation.navigate(screen.account.MainDrawer as never);
  }

  return (
    <SafeAreaView style={PublicacionStyles.safeArea}>
      
      <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
        <Text style={PublicacionStyles.backText}>atrás</Text>
      </TouchableOpacity>

      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={PublicacionStyles.titulo}>Listado de Propiedades</Text>
        )}
      />

      <TouchableOpacity
        style={PublicacionStyles.botonEliminar}
        onPress={handleToggleDeleteIcons}
      >
        <FontAwesome name="trash" size={24} color="black" />
        <Text style={PublicacionStyles.textoBotonEliminar}>Eliminar propiedad</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const PublicacionStyles = StyleSheet.create({
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
    color: "#0EAF0A",
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
    position: "absolute",
    top: 5,
    right: 5,
  },
  botonEliminar: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textoBotonEliminar: {
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },
  backText: {
    fontFamily: "Cairo_700Bold",
    fontSize: 24,
    lineHeight: 48,
  }
});

export default MisPublicacionesScreen;
