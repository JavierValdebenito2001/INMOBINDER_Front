import { View, TouchableOpacity, SafeAreaView, TextInput, Alert, Image } from 'react-native'
import React,{useContext} from 'react'
import { styles } from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import { Text } from '@rneui/base';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { firebase } from '../../../../firebase-config.js';
import { ImageContext } from '../Gallery/ImageContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { AddHomeGalleryStyles } from './AddHomeGalleryStyles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export function AddHomeGalleryScreen() {

    const navigation = useNavigation();

    const { images, setImages } = useContext(ImageContext);

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

  const saveImages = () => {
    // Aquí puedes realizar operaciones adicionales con las imágenes si es necesario
    Alert.alert('Las fotos se han guardado correctamente.');
  };

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
            <View style={AddHomeGalleryStyles.imagePreviewContainer}>
                {images.map((image, index) => (
                  <Image key={index} source={{ uri: image }} style={{width:200, height:200}} />
                ))}
              </View>
              <View style={AddHomeGalleryStyles.btnList}>
                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle} onPress={pickImage}>
                  <FontAwesomeIcon icon = {faPlus} size={15} style={AddHomeGalleryStyles.btnIcons}/>
                  <Text style = {AddHomeGalleryStyles.text}> Agregar fotos </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle} onPress={saveImages}>
                  <MaterialCommunityIcons name='content-save' size={25} style={{alignSelf:'center'}}/>
                  <Text style = {AddHomeGalleryStyles.text}> Guardar fotos </Text>
                </TouchableOpacity>
              </View>

              

          </ScrollView>
        </View>

      </SafeAreaView>

    </GestureHandlerRootView>
  )
}