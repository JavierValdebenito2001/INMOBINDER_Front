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
import ToggleSwitch from 'toggle-switch-react-native'

import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm'
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'

export function AddHomeScreen() {

    const navigation = useNavigation();

    const [image, setImage] = useState(null);

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '+7'];
    const estados = ['Disponible', 'No disponible'];

    const [regionSelected, setRegionSelected] = useState("");
    const [comunaSelected, setComunaSelected] = useState("");

    const [isOnLargeToggleSwitch, setIsOnLargeToggleSwitch] = useState(false);

    const onToggle = (val: boolean) => {
      setIsOnLargeToggleSwitch(val);
    }

    const [value, setValue] = useState<string>('');

    type Region = 'Arica y Parinacota' | 'Tarapacá' | 'Antofagasta' | 'Atacama' | 'Coquimbo' | 'Valparaíso' | 'Metropolitana' | 'O’Higgins' | 'Maule' | 'Ñuble' | 'Biobío' | 'Araucanía' | 'Los Ríos' | 'Los Lagos' | 'Aysén' | 'Magallanes';
    type Commune = string;

    const regions = ['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 
    'Valparaíso', 'Metropolitana', 'O’Higgins', 'Maule', 'Ñuble', 'Biobío', 'Araucanía', 
    'Los Ríos', 'Los Lagos', 'Aysén', 'Magallanes'];

    const regionCommunes: Record<Region, Commune[]> = {
      'Arica y Parinacota': ['Arica', 'Putre'],
      'Tarapacá': ['Iquique', 'Alto Hospicio', 'Pozo Almonte'],
      'Antofagasta': ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Calama', 'Ollagüe', 'San Pedro de Atacama'],
      'Atacama': ['Copiapó', 'Chañaral', 'Diego de Almagro', 'Vallenar'],
      'Coquimbo': ['La Serena', 'Coquimbo', 'Vicuña', 'Illapel', 'Los Vilos', 'Punitaqui', 'Salamanca', 'Andacollo', 'La Higuera', 'Paiguano', 'Viña del Mar', 'Quintero', 'Valparaíso', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Limache', 'Olmué', 'Quilpué', 'Villa Alemana'],
      'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Casablanca', 'Concón', 'Juan Fernández', 'Isla de Pascua', 'Los Andes', 'San Antonio', 'San Felipe', 'Cartagena', 'El Quisco', 'El Tabo', 'Hijuelas', 'La Calera', 'La Ligua', 'Nogales', 'Panquehue', 'Petorca', 'Quillota', 'San Esteban', 'San Felipe', 'Santo Domingo', 'Zapallar'],
      'Metropolitana': ['Buin', 'Calera de Tango', 'Colina', 'Curacaví', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'Isla de Maipo', 'Lampa', 'Lo Barnechea', 'Las Condes', 'Lo Espejo', 'Macul', 'Malloa', 'Melipilla', 'Padre Hurtado', 'Peñaflor', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Renca', 'San Bernardo', 'San Francisco de Borja', 'San José de Maipo', 'San Miguel', 'San Pedro', 'San Ramón', 'Santiago', 'Talagante', 'Tiltil', 'Vitacura'],
      'O’Higgins': ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchihue', 'Navidad', 'Paredones', 'Peralillo', 'Pichilemu', 'San Fernando', 'Chépica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Pumanque', 'San Fernando', 'Santa Cruz'],
      'Maule': ['Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas', 'Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualpén', 'Hualqui', 'Lebu', 'Los Ángeles', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Bárbara', 'Talcahuano', 'Tomé', 'Hualqui'],
      'Ñuble': ['Diguillín', 'Itata', 'Punilla', 'Bulnes', 'Chillán', 'Chillán Viejo', 'Cobquecura', 'Coelemu', 'Coihueco', 'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo', 'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'Trehuaco', 'Yungay'],
      'Biobío': ['Concepción', 'Chiguayante', 'Florida', 'Hualpén', 'Laja', 'Los Ángeles', 'Mulchén', 'Nacimiento', 'Negrete', 'Penco', 'Quilaco', 'Quilleco', 'San Pedro de la Paz', 'Santa Bárbara', 'Tomé', 'Coronel', 'Lebu', 'Cabrero', 'Chillán', 'Bulnes', 'Cobquecura', 'Coelemu', 'Coihueco', 'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo', 'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'Trehuaco', 'Yungay'],
      'Araucanía': ['Temuco', 'Carahue', 'Cunco', 'Curacautín', 'Freire', 'Galvarino', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt', 'Victoria', 'Vilcún'],
      'Los Ríos': ['Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Mariquina', 'Paillaco', 'Panguipulli', 'La Unión', 'Futrono', 'Río Bueno', 'Río Negro', 'Puren'],
      'Los Lagos': ['Puerto Montt', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quemchi', 'Quellón', 'Quinchao', 'Osorno', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo'],
      'Aysén': ['Coyhaique', 'Aisén', 'Cisnes', 'Guaitecas', 'Cochrane', 'O\'Higgins', 'Tortel', 'Chile Chico', 'Río Ibáñez'],
      'Magallanes': ['Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine']
    }

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

    const [fontsLoaded] = useFonts({
      Cairo_700Bold,
      Cairo_400Regular,
    });
    
    if (!fontsLoaded) {
      return null;
    }

    function handleBack(){
      navigation.navigate(screen.account.MainDrawer);
    }

    function handleGallery(){
      navigation.navigate(screen.account.addHomeGallery);
    }

    function handleVideos(){
      navigation.navigate(screen.account.addHomeVideos);
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

              <TouchableOpacity onPress={pickImage} style={AddHomeStyles.imgUpload}>
                <Image source={image ? { uri: image } : require('../../../assets/images/ImageUploadIcon.png')} style={AddHomeStyles.imgUploadSize} />
              </TouchableOpacity>

              <View style={AddHomeStyles.gastosComunes}>
                <Text style={AddHomeStyles.text2}> Incluye gastos comunes por </Text>
                <TextInput style={AddHomeStyles.inputGastosComunes} placeholder='$000.000' maxLength={6} keyboardType='numeric'></TextInput>
              </View>

              <View style = {AddHomeStyles.btnList3}>

                <SelectDropdown
                  data={estados}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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
                  rowStyle={AddHomeStyles.dropdown2RowStyle} // contenido de cada item
                  rowTextStyle={AddHomeStyles.text2}
                />

              </View>

              <Text style = {AddHomeStyles.text2}> Metros cuadrados construidos </Text>
              <TextInput style={AddHomeStyles.inputMetros} keyboardType='numeric'></TextInput>

              <Text style = {AddHomeStyles.text2}>Dirección</Text>
              <TextInput style={AddHomeStyles.input}></TextInput>

              <View style={AddHomeStyles.btnList}>

                <SelectDropdown
                  key={regionSelected}
                  data={regionSelected ? regionCommunes[regionSelected as keyof typeof regionCommunes] : []}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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

                <SelectDropdown
                  data={Object.keys(regionCommunes)}
                  onSelect={(selectedItem, index) => {
                    setRegionSelected(selectedItem as Region);
                    setComunaSelected("");
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={'Región'}
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
              <TextInput style={AddHomeStyles.inputGastosComunes} placeholder='$000.000' maxLength={6} keyboardType='numeric'>
              </TextInput>

              <View style={AddHomeStyles.btnList}>

                <SelectDropdown
                  data={numbers}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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

              <TextInput style={AddHomeStyles.input}></TextInput>
              <TextInput style={AddHomeStyles.input}></TextInput>

              <Text style = {AddHomeStyles.text2}>Descripción</Text>

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
              <ToggleSwitch
                onColor="#04c7f2"
                offColor="#bbb8b8"
                size="large"
                isOn={isOnLargeToggleSwitch}
                onToggle={onToggle}
              />

              <TouchableOpacity style={{...AddHomeStyles.btnStyle2, marginTop: 10}}>
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