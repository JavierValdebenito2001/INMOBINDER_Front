import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { screen } from '../utils/ScreenName';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import{ firebase } from '../../firebase-config';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';



const ancho = Dimensions.get('window').width; 
const alto = Dimensions.get('window').height; 

const Profile =()=>{

//Recuperar nombre de usuario

    const navigation = useNavigation();

    function getTypeDescription(type) {
        switch(type) {
          case 1:
            return "Persona Natural";
          case 2:
            return "Inmobiliaria";
          case 3:
            return "Corredor de propiedades";
          default:
            return "Tipo desconocido";
        }
      };

      function getStatus(status) {
        switch(status) {
          case 0:
            return "Cuenta no verificada";
          case 1:
            return "Cuenta verificada";
          default:
            return "Tipo desconocido";
        }
      };

function handleBack(){
    navigation.navigate(screen.account.MainDrawer);
  }
  
function EditProfile(){
    navigation.navigate(screen.account.EditProfile);
  }

  const [text, onChangeText] = React.useState('');

  const [name, setName] = useState('')
  const [rut, setRut] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [creationDate, setCreationDate] = useState('')

  
  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).get().then((snapshot) => { 
      if (snapshot.exists) {
        const data = snapshot.data();
        setName(data.name);
        setRut(data.rut);
        setEmail(data.email);
        setPhone(data.phone);
        setType(Number(data.type));
        setStatus(Number(data.status)); // Convierte type a un número
        setCreationDate(data.creationDate);
      } else { 
        console.log('No data available'); 
      } 
    });
  }, []);


    return(

        <View >
            <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}/>
            <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.containershadow}>
                <Text style={styles.title}>Perfil</Text>
                <View style={{flexDirection:'row'}}>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/images/Camara.jpg')}
                        />
                    <Ionicons style={{paddingRight:5, alignSelf:'center'}} size={30} name="calendar-outline"/>
                    <View style={{alignItems:'center', alignSelf:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:12}}>Fecha en que se unio</Text>
                        <Text style={{color:'#DDE0E5', fontSize:10}}>{new Date(creationDate).toLocaleDateString()}</Text>
                    </View>
                </View>
                <Text style={{marginTop:-40, alignSelf:'center', paddingLeft:40}}>{getStatus(status)}</Text>
                <View style={{marginVertical:10}}>
                <Text style={styles.box}>
                {name}
                </Text>
                <Text style={styles.box}>
                {email}
                 </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.box}>
                        {phone}
                    </Text>
                    <Text style={styles.box}>
                        {rut}
                    </Text>
                </View>
                <View style={{ paddingTop:30, alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:15, paddingBottom:20}}>Registrado como:</Text>
                    <Text style={{fontWeight:'bold', fontSize:30, color:'#C1C4CA'}}>{getTypeDescription(type)}</Text>
                </View>
                <TouchableOpacity
                    onPress={EditProfile}
                    style={{backgroundColor:'#ADAFB2',flexDirection:'row' , alignItems:'center', justifyContent:'center', margin:20, padding:5}}>
                    <Ionicons style={{paddingRight:5, alignItems:'center', color:'#100'}} size={30} name="pencil-outline"/>
                    <Text style={{color:'#100', fontWeight:'bold'}}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

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
    box:{
        borderWidth:1,
        padding:10,
        marginVertical:20,
        marginHorizontal:20,
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
        height: "90%",
        borderRadius: 20,
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
