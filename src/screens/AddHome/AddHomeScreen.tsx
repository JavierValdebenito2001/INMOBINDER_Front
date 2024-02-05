import { View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
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

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../../firebase-config';

import { getFirestore, collection, getDocs } from 'firebase/firestore';

export function AddHomeScreen() {

  const navigation = useNavigation();

  //FOTO PRINCIPAL

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const [image, setImage] = useState<string | undefined>();
    }
  };

  //CONEXION A FIRESTORE

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const querySnapshot = getDocs(collection(db, "Pais"));

  const regionComuna = new Map();
  const regiones = new Array();

  querySnapshot.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      regionComuna.set(doc.data().region, doc.data().comunas);
      regiones.push(doc.data().region);
    });
  });

  const [comunasData, setComunasData] = useState([]);
  const [regionSelected, setRegionSelected] = useState("");
  const [comunaSelected, setComunaSelected] = useState("");

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '+7'];
  const estados = ['Disponible', 'No disponible'];

  //ESTADO LOCAL

  const [state, setState] = useState({
    titulo: '',
    gastosComunes: '', 
    estado: '',
    metrosCuadrados: '',
    region: '',
    comuna: '',
    direccion: '',
    precio: '',
    habitaciones: '',
    sanitarios: '',
    descripcion: '',
  });

  const handleChangeState = (name: string, value: any) => {
    setState({...state, [name]: value});
  };

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  function handleLog(){
    console.log(state);
  };

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
              <TextInput style={AddHomeStyles.input} onChangeText={(value)=>handleChangeState('titulo', value)}></TextInput>

              <TouchableOpacity onPress={pickImage} style={AddHomeStyles.imgUpload}>
                <Image source={image ? { uri: image } : require('../../../assets/images/ImageUploadIcon.png')} style={AddHomeStyles.imgUploadSize} />
              </TouchableOpacity>

              <View style={AddHomeStyles.gastosComunes}>
                <Text style={AddHomeStyles.text2}> Incluye gastos comunes por </Text>
                <TextInput style={AddHomeStyles.inputGastosComunes} placeholder='$000.000' maxLength={6} keyboardType='numeric' onChangeText={(value)=>handleChangeState('gastosComunes', value)}></TextInput>
              </View>

              <View style = {AddHomeStyles.btnList3}>

                <SelectDropdown
                  data={estados}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem);
                    handleChangeState('estado', selectedItem);
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
              <TextInput style={AddHomeStyles.inputMetros} keyboardType='numeric' onChangeText={(value)=>handleChangeState('metrosCuadrados', value)}></TextInput>

              <Text style = {AddHomeStyles.text2}>Dirección</Text>
              <TextInput style={AddHomeStyles.input} onChangeText={(value)=>handleChangeState('direccion', value)}></TextInput>

              <View style={AddHomeStyles.btnList}>

                <SelectDropdown
                  data={regiones}
                  onSelect={(selectedItem, index) => {
                    setRegionSelected(selectedItem as string);
                    setComunaSelected("");
                    setComunasData(regionComuna.get(selectedItem));
                    console.log(selectedItem, index);
                    handleChangeState('region', selectedItem);
                  }}
                  defaultButtonText={regionSelected || 'Región'}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    console.log(selectedItem, index);
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
                  data={comunasData}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setComunaSelected(selectedItem);
                    handleChangeState('comuna', selectedItem);
                  }}
                  defaultButtonText={comunaSelected || 'Comuna'}
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

              <Text style = {AddHomeStyles.text2}>Disponible por</Text>
              <TextInput style={AddHomeStyles.inputGastosComunes} placeholder='$000.000' maxLength={6} keyboardType='numeric' onChangeText={(value)=>handleChangeState('precio', value)}>
              </TextInput>

              <View style={AddHomeStyles.btnList}>

                <SelectDropdown
                  data={numbers}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    handleChangeState('habitaciones', selectedItem)
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
                    handleChangeState('sanitarios', selectedItem);
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
              <TextInput style={AddHomeStyles.input} onChangeText={(value)=>handleChangeState('descripcion', value)}></TextInput>

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
             
              <TouchableOpacity style={{...AddHomeStyles.btnStyle2, marginTop: 10}} onPress={handleLog}>
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