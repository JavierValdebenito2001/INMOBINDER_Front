import { View, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native'
import React,{useContext} from 'react'
import { styles } from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import { Text, Image,  } from '@rneui/base';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { firebase } from '../../../../firebase-config.js';
import { ImageContext } from '../Gallery/ImageContext';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { AddHomeGalleryStyles } from './AddHomeGalleryStyles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export function AddHomeGalleryScreen() {

    const navigation = useNavigation();
    

  
    const { setImages } = useContext(ImageContext);

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [10, 10],
      quality: 1,
    });
    if (!result.canceled) {
      setImages(prevImages => [...prevImages, result.assets[0].uri]);
    }
  };

    // const uploadMedia = async () => { 
    //   setUploading(true);    
    //   try {
    //     const { uri } = await FileSystem.getInfoAsync(image);
    //     const blob = await new Promise((resolve, reject) => {
    //       const xhr = new XMLHttpRequest();
    //       xhr.onload = function() {
    //         resolve(xhr.response);
    //       };
    //       xhr.onerror = function(e) {
    //         console.log(e);
    //         reject(new TypeError('Network request failed'));
    //       };
    //       xhr.responseType = 'blob';
    //       xhr.open('GET', uri, true);
    //       xhr.send(null);
    //     });
    
    //     // Use a timestamp to create a unique filename
    //     const timestamp = Date.now();
    //     const filename = `image_${timestamp}_${uuidv4()}.jpg`;
    //     const ref = firebase.storage().ref().child('images/' + filename);
      
    //     await ref.put(blob);
    //     setUploading(false);
    //     Alert.alert('Imagen subida');
    //     setImage(null);
    //   } catch(err) {
    //     console.log('Error: ', err);
    //     setUploading(false);
    //   }
    // };

    function handleBack(){
      navigation.navigate(screen.account.addHome);
    } 

  return (

    <GestureHandlerRootView style={AddHomeGalleryStyles.container}>

      <SafeAreaView style={styles.container}>

        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
        </TouchableOpacity>

        <View style={AddHomeGalleryStyles.containerAddHomeGallery}>
          <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            <View style={AddHomeGalleryStyles.containerScroll}>

              <Text style= {AddHomeGalleryStyles.textAddHomeTitle}> Galería de fotos </Text>
              <Text style = {AddHomeGalleryStyles.text}> Propiedad </Text>
            </View>
              <View style={AddHomeGalleryStyles.btnList}>
                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle} onPress={pickImage}>
                  <FontAwesomeIcon icon = {faPlus} size={15} style={AddHomeGalleryStyles.btnIcons}/>
                  <Text style = {AddHomeGalleryStyles.text}> Agregar fotos </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle} >
                  <FontAwesomeIcon icon = {faTrash} size={15} style={AddHomeGalleryStyles.btnIcons}/>
                  <Text style = {AddHomeGalleryStyles.text}> Eliminar foto </Text>
                </TouchableOpacity>
              </View>

            

          </ScrollView>
        </View>

      </SafeAreaView>

    </GestureHandlerRootView>
  )
}