import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';



const ancho = Dimensions.get('window').width; 
const alto = Dimensions.get('window').height; 

const EditProfile =()=>{

    const navigation = useNavigation();

function handleBack(){
    navigation.navigate(screen.account.MainDrawer);
  }

  const [text, onChangeText] = React.useState('');


    return(

        <View >
            <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.containershadow}>
                <Text style={styles.title}>Perfil</Text>
                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'flex-start', paddingLeft:50}}>Foto de perfil</Text>
                <View style={{flexDirection:'row'}}>
                    
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/images/Camara.jpg')}
                        />
                    <View style={{alignItems:'center', alignSelf:'center'}}>
                    <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}>
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="camera"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Editar foto</Text>
                </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Nombre Nombre Apellido Apellido'
                    />
                    <Text style={styles.Subheading}>Nombre Completo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Nombre_apellido@hotmail.com'
                    />
                    <Text style={styles.Subheading}>Correo Electronico</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                    <TextInput
                        style={styles.miniinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='9 00000000'
                    />
                    <Text style={styles.Subheading}>Telefono</Text>
                    </View>
                    <View>
                    <TextInput
                        style={styles.miniinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='01.234.567-8'
                    />
                    <Text style={styles.Subheading}>RUT</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}>
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="pencil-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Editar Informacion</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:10}}>
                    <TextInput
                        style={styles.miniinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='XXXXXXXXXXX'
                    />
                    <Text style={styles.Subheading}>Contraseña</Text>
                    </View>
                    <TouchableOpacity
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}>
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="pencil-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Editar Contraseña</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        marginBottom:20,
        paddingBottom:15,
        borderBottomWidth:1, 
        width:ancho*0.7,
        textAlign: 'center'    
    },
    Subheading:{
        fontWeight:'bold',
        textAlign: 'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:20
    },
    logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
      },
    back:{
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        marginRight: "auto",
        alignItems: "center",
        },
    avatar: {
        backgroundColor: '#DDE0E5',
        width: 125,
        height: 125,      
        borderRadius: 50,
        resizeMode: 'contain'
        
    },
    input:{
        height:40,
        borderWidth:2,
        padding:10,
        margin:10
    },
    miniinput:{
        height:40,
        width: ancho*0.3,
        borderWidth:2,
        padding:10,
        margin:10
    },
    containershadow:{    
        width: "90%",
        height: "70%",
        borderRadius: 20,
        height:alto*0.85,
        alignSelf: "center",
        alignItems:'center',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
},
})
