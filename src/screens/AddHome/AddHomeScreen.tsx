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
import { firebase }  from '../../../firebase-config.js';
import { db } from '../../../firebase-config.js';
import { getDocs, collection } from 'firebase/firestore';

export function AddHomeScreen() {

  const navigation = useNavigation();
  const creationDate = new Date(); 


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
    creationDate: creationDate.toDateString()
  });

  const [image, setImage] = useState<string | undefined>();

  const [comunasData, setComunasData] = useState([]); // comunas[regionSelected
  const [regionSelected, setRegionSelected] = useState("");
  const [comunasSelected, setComunasSelected] = useState("");

  const querySnapshot = getDocs(collection(db, "Pais")); 

  const regionComuna = new Map();
  const regionesArray= new Array();

  querySnapshot.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      regionComuna.set(doc.data().region, doc.data().comunas);
      regionesArray.push(doc.data().region);
    });
  });


  const handleChangeState = (name: string, value: any) => {
    setState({...state, [name]: value});
  };

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
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri: string, docId: string) => {
    // Crea una referencia al archivo que quieres subir
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`images/${docId}/${Date.now()}`);
    
    // Sube el archivo a Firebase Storage
    const snapshot = await ref.put(blob);
  
    // Obtiene la URL de descarga del archivo subido
    const downloadURL = await snapshot.ref.getDownloadURL();
  
    return downloadURL;
  };
  
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '+7'];
  const estados = ['Disponible', 'No disponible'];

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  function handleBack(){
    navigation.navigate(screen.account.MainDrawer as never);
  }

  function handleGallery(){
    navigation.navigate(screen.account.addHomeGallery as never);
  }

  function handleVideos(){
    navigation.navigate(screen.account.addHomeVideos  as never);
  }

  async function handleLog(){ 
    // Comprueba si todos los valores del estado no están vacíos
    if (Object.values(state).every(value => value)) {
      // Obtiene el ID del usuario logueado
      const userId = firebase.auth().currentUser?.uid;
  
      if (userId) {
        // Agrega el ID del usuario al estado
        const stateWithUserId = { ...state, userId };
  
        // Crea el documento en Firestore sin la URL de la imagen
        const docRef = await db.collection('properties').add(stateWithUserId);
  
        // Sube la imagen a Firebase Storage y obtiene la URL de descarga
        const imageUrl = await uploadImage(image!, docRef.id);
  
        // Actualiza el documento en Firestore con la URL de la imagen
        await docRef.update({ imageUrl });
  
        console.log("Document Guardado con Id:", docRef.id);
      } else {
        console.error("Error: No hay ningún usuario logueado");
      }
    } else {
      console.error("Error: Todos los campos deben estar llenos");
    }
  };

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
                  data={regionesArray}
                  onSelect={(selectedItem, index) => {
                    setRegionSelected(selectedItem);
                    const newComunas = regionComuna.get(selectedItem);
                    setComunasData(newComunas);
                    if (newComunas && newComunas.length > 0) {
                      const firstComuna = newComunas[0];
                      setComunasSelected(firstComuna);
                      handleChangeState('comuna', firstComuna);
                    } else {
                      setComunasSelected("");
                    }
                    handleChangeState('region', selectedItem);
                  }}
                  defaultButtonText={ regionSelected || 'Región'}
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
                  data={comunasData}
                  onSelect={(selectedItem, index) => {
                    setComunasSelected(selectedItem);
                    console.log(selectedItem, index);
                    handleChangeState('comuna', selectedItem);
                  }}
                  defaultButtonText={comunasSelected ||  'Comuna'}
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