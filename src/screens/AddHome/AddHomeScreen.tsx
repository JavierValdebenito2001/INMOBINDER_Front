import { View, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { styles } from '../styles';
import { Text, Image } from '@rneui/base';
import { AddHomeStyles } from './AddHomeStyles';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import SelectDropdown from 'react-native-select-dropdown';
import { ImageContext } from '../AddHome/Gallery/ImageContext.tsx';

import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm'
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { firebase } from '../../../firebase-config.js';


export function AddHomeScreen() {
  const { images } = useContext(ImageContext);
  const { setImages } = useContext(ImageContext);

  const [Titulo, setTitulo] = useState('');
  const [GastosComunes, setGastosComunes] = useState('');
  const [Estado, setEstado] = useState('');
  const [MetrosCuadrados, setMetrosCuadrados] = useState('');
  const [comunas, setComunas] = useState(new Map());
  const [Direccion, setDireccion] = useState('');
  const [Precio, setPrecio] = useState('');
  const [Habitaciones, setHabitaciones] = useState('');
  const [Sanitarios, setSanitarios] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [comunasData, setComunasData] = useState([]);
  const [regionSelected, setRegionSelected] = useState("");
  const [comunaSelected, setComunaSelected] = useState("");
  
  

  const regionComuna = new Map();
  const [regiones, setRegiones] = useState([]);


  const navigation = useNavigation();

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '+7'];
  const estados = ['Disponible', 'No disponible'];

  const [image, setImage] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);

  const saveProperty = async () => {
    // Verificar que todos los campos estén llenos
    if (!Titulo || !GastosComunes || !Estado || !MetrosCuadrados || !regionSelected || !comunaSelected || !Direccion || !Precio || !Habitaciones || !Sanitarios || !Descripcion) {
      Alert.alert('Todos los campos son obligatorios.');
      return; // Salir de la función
    }
    let blob; // Define blob here
    console.log(Titulo, GastosComunes, Estado, MetrosCuadrados, regionSelected, comunaSelected, Direccion, Precio, Habitaciones, Sanitarios, Descripcion);
    try {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const userId = firebase.auth().currentUser?.uid;
      const data = {
        Titulo,
        GastosComunes,
        Estado,
        MetrosCuadrados,
        regionSelected,
        comunaSelected,
        Direccion,
        Precio,
        Habitaciones,
        Sanitarios,
        Descripcion,
        createdAt: timestamp,
        userId,
      };
      const docRef = await firebase.firestore().collection('properties').add(data);
  
      // Subir las imágenes a Firebase
      const uploadImage = async (uri: string, imageName: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`images/${docRef.id}/${imageName}`);
        await ref.put(blob);
        return ref.getDownloadURL(); // Obtener la URL de la imagen
      };
  
      // Generar un nombre único para cada imagen
      const imageNames = images.map((image, index) => `image_${index}.jpg`);
  
      // Subir todas las imágenes
      const uploadPromises = images.map((image, index) => uploadImage(image, imageNames[index]));
      const imageUrls = await Promise.all(uploadPromises); // Obtener todas las URLs de las imágenes
  
      // Guardar las URLs de las imágenes en la base de datos
      await docRef.update({ imageUrls });
      setImages([]);
      Alert.alert('Propiedad guardada correctamente.');
  
    } catch (error) {
      Alert.alert('Error al guardar la propiedad: ' + error.message);
    }
  }
  

  useEffect(() => {
    const loadPaisData = async () => {
      try {
        const paisSnapshot = await firebase.firestore().collection('Pais').get();
        const regionesData = [];
        const comunasData = new Map();
        paisSnapshot.forEach(doc => {
          const data = doc.data();
          regionesData.push(data.region);
          comunasData.set(data.region, data.comunas);
        });
        setRegiones(regionesData);
        setComunas(comunasData);
      } catch (error) {
        console.error('Error al cargar los datos de Pais: ', error);
      }
    };
    loadPaisData();
  }, []);

  function handleBack(){
    navigation.navigate(screen.account.MainDrawer as never);
  }

  function handleGallery(){
    navigation.navigate(screen.account.addHomeGallery as never);
  }

  function handleVideos(){
    navigation.navigate(screen.account.addHomeVideos  as never);
  }

  return (
    <GestureHandlerRootView style={AddHomeStyles.container}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeStyles.backText}>atrás</Text>
        </TouchableOpacity>

        <View style={AddHomeStyles.containerAddHome}>
          <ScrollView contentContainerStyle={{ width: '100%'}} showsVerticalScrollIndicator={false}>
            <View style={AddHomeStyles.containerScroll}>
              <Text style= {AddHomeStyles.textAddHomeTitle}> Agregar Propiedades </Text>

              <Text style= {AddHomeStyles.text2}> Titulo </Text>
              <TextInput style={AddHomeStyles.input} onChangeText={(text) => setTitulo(text)}></TextInput>
              <View style={AddHomeStyles.gastosComunes}>
                <Text style={AddHomeStyles.text2}> Incluye gastos comunes por </Text>
                <TextInput style={AddHomeStyles.inputGastosComunes}onChangeText={(text) => setGastosComunes(text)} keyboardType='numeric'></TextInput>
              </View>

              <View style = {AddHomeStyles.btnList3}>
                <SelectDropdown
                  data={estados}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem);
                    setEstado(selectedItem);
                    ;
                  }}
                  defaultButtonText={'Estado'}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={AddHomeStyles.dropdown2BtnStyle}
                  buttonTextStyle={AddHomeStyles.text2}
                  dropdownStyle={AddHomeStyles.dropdown2DropdownStyle} // estilo del dropdown
                  rowStyle={AddHomeStyles.dropdown2RowStyle}
                  rowTextStyle={AddHomeStyles.text2}
                />
              </View>

              <Text style = {AddHomeStyles.text2}> Metros cuadrados construidos </Text>
              <TextInput style={AddHomeStyles.inputMetros} keyboardType='numeric' onChangeText={(text) => setMetrosCuadrados(text)} ></TextInput>

              <Text style = {AddHomeStyles.text2}>Dirección</Text>
              <TextInput style={AddHomeStyles.input} onChangeText={(text) => setDireccion(text)} ></TextInput>

              <View style={AddHomeStyles.btnList}>
              <SelectDropdown
  data={regiones}
  onSelect={(selectedItem, index) => {
    setRegionSelected(selectedItem);
    setComunasData(comunas.get(selectedItem));
  }}
  defaultButtonText={regionSelected || 'Región'}
  buttonStyle={AddHomeStyles.dropdown2BtnStyle}
                  buttonTextStyle={AddHomeStyles.text2}
                  dropdownStyle={AddHomeStyles.dropdown2DropdownStyle} // estilo del dropdown
                  rowStyle={AddHomeStyles.dropdown2RowStyle}
                  rowTextStyle={AddHomeStyles.text2}
/>

<SelectDropdown
  data={comunasData}
  onSelect={(selectedItem, index) => {
    setComunaSelected(selectedItem);
  }}
  defaultButtonText={comunaSelected || 'Comuna'}
  buttonStyle={AddHomeStyles.dropdown2BtnStyle}
                  buttonTextStyle={AddHomeStyles.text2}
                  dropdownStyle={AddHomeStyles.dropdown2DropdownStyle} // estilo del dropdown
                  rowStyle={AddHomeStyles.dropdown2RowStyle}
                  rowTextStyle={AddHomeStyles.text2}
/>
              </View>

              <Text style = {AddHomeStyles.text2}>Disponible por</Text>
              <TextInput style={AddHomeStyles.inputGastosComunes} placeholder='$000.000' onChangeText={(text) => setPrecio(text)} keyboardType='numeric' >
              </TextInput>

              <View style={AddHomeStyles.btnList}>
                <SelectDropdown
                  data={numbers}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setHabitaciones(selectedItem);
                  }}
                  defaultButtonText={'Habitaciones'}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={AddHomeStyles.dropdown2BtnStyle}
                  buttonTextStyle={AddHomeStyles.text2}
                  dropdownStyle={AddHomeStyles.dropdown2DropdownStyle} // estilo del dropdown
                  rowStyle={AddHomeStyles.dropdown2RowStyle} // contenido de cada item
                  rowTextStyle={AddHomeStyles.text2}
                />

                <SelectDropdown
                  data={numbers}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setSanitarios(selectedItem);
                  }}
                  defaultButtonText={'Baños'}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={AddHomeStyles.dropdown2BtnStyle}
                  buttonTextStyle={AddHomeStyles.text2}
                  dropdownStyle={AddHomeStyles.dropdown2DropdownStyle} // estilo del dropdown
                  rowStyle={AddHomeStyles.dropdown2RowStyle} // contenido de cada item
                  rowTextStyle={AddHomeStyles.text2}
                />
              </View>
              
              <Text style = {AddHomeStyles.text2}>Descripción</Text>
              <TextInput style={AddHomeStyles.input} onChangeText={(text) => setDescripcion(text)} ></TextInput>

              <View style={{...AddHomeStyles.btnList2}}>
                <TouchableOpacity style={AddHomeStyles.btnStyle2} onPress = {handleVideos}>
                  <FontAwesomeIcon icon={faFilm} size={20} style={AddHomeStyles.btnIcons}/>
                  <Text style={{...AddHomeStyles.text2}}>Galeria de videos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={AddHomeStyles.btnStyle2} onPress={handleGallery}>
                  <FontAwesomeIcon icon={faImages} size={20} style={AddHomeStyles.btnIcons}/>
                  <Text style={AddHomeStyles.text2}>Galeria de fotos</Text>
                </TouchableOpacity>
              </View>

              <Text>¿Deseas activar la detección dinámica en esta publicación?</Text>
             
              <TouchableOpacity style={{...AddHomeStyles.btnStyle2, marginTop: 10}} onPress={saveProperty}>
                <FontAwesomeIcon icon = {faSquareCheck} size={20} style={AddHomeStyles.btnIcons}/>
                <Text style={AddHomeStyles.text2}> Guardar propiedad </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}