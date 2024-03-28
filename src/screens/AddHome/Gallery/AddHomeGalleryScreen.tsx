import { View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles';
import { Text, Image } from '@rneui/base';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { AddHomeGalleryStyles } from './AddHomeGalleryStyles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export function AddHomeGalleryScreen() {

    const [image, setImage] = useState<string | undefined>();
    const navigation = useNavigation();

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

    function handleBack(){
      navigation.navigate(screen.account.addHome as never);
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

              <View style={AddHomeGalleryStyles.btnList}>
                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle}>
                  <FontAwesomeIcon icon = {faPlus} size={15} style={AddHomeGalleryStyles.btnIcons}/>
                  <Text style = {AddHomeGalleryStyles.text}> Agregar fotos </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {AddHomeGalleryStyles.btnStyle}>
                  <FontAwesomeIcon icon = {faTrash} size={15} style={AddHomeGalleryStyles.btnIcons}/>
                  <Text style = {AddHomeGalleryStyles.text}> Eliminar foto </Text>
                </TouchableOpacity>
              </View>

            </View>

          </ScrollView>
        </View>

      </SafeAreaView>

    </GestureHandlerRootView>
  )
}