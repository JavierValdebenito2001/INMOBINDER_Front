import { View, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { styles } from '../styles';
import { Text, Image } from '@rneui/base';
import { AddHomeStyles } from './AddHomeStyles';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../utils/ScreenName';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import SelectDropdown from 'react-native-select-dropdown';

import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm'
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { firebase } from '../../../firebase-config.js';


export function AddHomeScreen() {

  const [Titulo, setTitulo] = useState('');
  const [GastosComunes, setGastosComunes] = useState('');
  const [Estado, setEstado] = useState('');
  const [MetrosCuadrados, setMetrosCuadrados] = useState('');
  const [Region, setRegion] = useState('');
  const [Comuna, setComuna] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Precio, setPrecio] = useState('');
  const [Habitaciones, setHabitaciones] = useState('');
  const [Sanitarios, setSanitarios] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  

  const navigation = useNavigation();

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '+7'];
  const estados = ['Disponible', 'No disponible'];

  //ESTADO LOCAL

  const saveProperty = async () => {
    console.log(Titulo, GastosComunes, Estado, MetrosCuadrados, Region, Comuna, Direccion, Precio, Habitaciones, Sanitarios, Descripcion);
    try {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const userId = firebase.auth().currentUser?.uid;
      const data = {
        Titulo,
        GastosComunes,
        Estado,
        MetrosCuadrados,
        Region,
        Comuna,
        Direccion,
        Precio,
        Habitaciones,
        Sanitarios,
        Descripcion,
        createdAt: timestamp,
        userId,
      };
      await firebase.firestore().collection('properties').add(data);
      Alert.alert('Propiedad guardada correctamente.');
    } catch (error) {
      Alert.alert('Error al guardar la propiedad: ' + error.message);
    }
  }
  
  //NAVEGACION

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