import React, { useState, useEffect } from "react";
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
  Alert
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/ScreenName";
import { styles } from "../styles";
import { firebase } from '../../../firebase-config.js';

const FilteredProperty: React.FC = ({ route }) => {
    const { minPrice, maxPrice, minBedrooms, maxBedrooms, minBathrooms, maxBathrooms, minCommonExpenses, maxCommonExpenses, minBuiltArea, maxBuiltArea } = route.params;
  
    const [showDeleteIcons, setShowDeleteIcons] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
          const userId = firebase.auth().currentUser?.uid;
          const propertiesSnapshot = await firebase.firestore().collection('properties').where('userId', '==', userId).get();
            
          let propertiesData = propertiesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
      
          if (minPrice) propertiesData = propertiesData.filter(property => property.Precio >= Number(minPrice));
          if (maxPrice) propertiesData = propertiesData.filter(property => property.Precio <= Number(maxPrice));
          if (minBedrooms) propertiesData = propertiesData.filter(property => property.Dormitorios >= Number(minBedrooms));
          if (maxBedrooms) propertiesData = propertiesData.filter(property => property.Dormitorios <= Number(maxBedrooms));
          if (minBathrooms) propertiesData = propertiesData.filter(property => property.Baños >= Number(minBathrooms));
          if (maxBathrooms) propertiesData = propertiesData.filter(property => property.Baños <= Number(maxBathrooms));
          if (minCommonExpenses) propertiesData = propertiesData.filter(property => property.GastosComunes >= Number(minCommonExpenses));
          if (maxCommonExpenses) propertiesData = propertiesData.filter(property => property.GastosComunes <= Number(maxCommonExpenses));
          if (minBuiltArea) propertiesData = propertiesData.filter(property => property.MetrosConstruidos >= Number(minBuiltArea));
          if (maxBuiltArea) propertiesData = propertiesData.filter(property => property.MetrosConstruidos <= Number(maxBuiltArea));
      
          setProperties(propertiesData);
        };
      
        fetchProperties();
      }, []);


  const  renderItem = ({ item }: { item: any }) => (
    <View key={item.id} style={PublicacionStyles.publicacionContainer}>
      {item.imageUrls && <Image source={{uri : Array.isArray(item.imageUrls) ? item.imageUrls[0] : item.imageUrls}} style={PublicacionStyles.imagen} />}
      <View style={PublicacionStyles.contenidoCentrado}>
        <Text style={PublicacionStyles.subtitulo}>{`Propiedad ${item.Titulo}`}</Text>
        <Text style={PublicacionStyles.precio}>{item.Precio}</Text>
        <Text style={PublicacionStyles.direccion}>{item.Direccion}</Text>
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
    navigation.navigate('Details', { itemId });
  }

  const handleDetalles = (item: any) => {
    console.log(`Detalles de la propiedad ${item.id}`);
  };

  const handleEliminarPropiedad = (id: string) => {
    const property = properties.find(property => property.id === id);
  
    Alert.alert(
      "Eliminar propiedad",
      `¿Estás seguro de que quieres eliminar la propiedad: ${property?.Titulo}?`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: async () => {
            // Eliminar las imágenes de la propiedad en Firebase Storage
            if (property?.imageUrls) {
              for (const imageUrl of property.imageUrls) {
                const imageRef = firebase.storage().refFromURL(imageUrl);
                try {
                  await imageRef.delete();
                  console.log(`Imagen eliminada: ${imageUrl}`);
                } catch (error) {
                  console.error(`Error eliminando la imagen: ${imageUrl}`, error);
                }
              }
            }
  
            // Eliminar el documento de la propiedad en Firestore
            firebase.firestore().collection('properties').doc(id).delete()
              .then(() => {
                console.log(`Propiedad eliminada: ${id}`);
                // Actualizar la lista de propiedades después de eliminar
                const updatedProperties = properties.filter(property => property.id !== id);
                setProperties(updatedProperties);
              })
              .catch((error) => {
                console.error(`Error eliminando la propiedad: ${id}`, error);
              });
          } 
        }
      ]
    );
  };
  
  const handleToggleDeleteIcons = () => {
    setShowDeleteIcons(!showDeleteIcons);
  };

  function handleBack() {
    navigation.navigate(screen.account.MainDrawer);
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
          <Text style={PublicacionStyles.titulo}>Propiedades Filtradas</Text>
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

export default FilteredProperty;
