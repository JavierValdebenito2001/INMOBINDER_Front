import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native'
import { auth } from './Data/firebase-config';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Register = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

  
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Usuario creado')
            const user= userCredential.user
            console.log(user)    }   
        )}

    return (
        <View style={styles.container}>
            <Text>Wazaa2</Text>

            <View style={{flexDirection:'row', marginTop: 18}}>
          <MaterialCommunityIcons name='at' size={25} style={{alignSelf:'center'}}/>
          <TextInput onChangeText={(text) => setEmail(text)} placeholder='Correo electrónico' style={{ ...LoginStyles.input}}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name='lock' size={25} style={{alignSelf:'center'}}/>
          <TextInput onChangeText={(text) => setPassword(text)} placeholder='Contraseña' style={LoginStyles.input}/>
        </View>

        <TouchableOpacity style={LoginStyles.containerLoginGoogle}  onPress={handleCreateAccount}> 
            <Text style={{ ...LoginStyles.loginGoogle, }}>Ingresar con Google</Text>           
          </TouchableOpacity>



        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})

const LoginStyles = StyleSheet.create({

    containerLogin:{    
      width: "90%",
      height: "70%",
      borderRadius: 20,
      alignItems: "center",
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
  
    textLogin:{
      fontSize: 28,
      marginTop: '6%',
      fontWeight: 'bold',
    },
  
    text1:{
      fontSize: 15,
    },
  
    text2:{
      fontSize: 10,
      //width: "90%",
      //marginLeft: "5%",
      //marginTop: -10,
    },
  
    input:{
      width: '85%',
      height: 40,
      borderWidth:2,
      margin:10,
      borderRadius:10,
      paddingLeft: 10,
    },
  
    containerBtn:{
      alignItems: "center",
    },
  
    btnStyle:{
      backgroundColor: 'rgb(9,27,43)',
      borderRadius: 10,
      width: 100,
      height: 40,
      marginTop: '10%',
      shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
    },
  
    textBtn:{
      color: 'rgb(255,255,255)',
      fontSize: 14,
      textAlign: "center",
    },
  
    containerLoginGoogle:{
      justifyContent: "center",
      alignItems: 'center',
      marginTop: 10,
      width: 220,
      height: 40,
      borderRadius: 40,
      flexDirection: 'row',
      shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
        marginTop: '3%',
    },
  
    loginGoogle:{
      fontSize: 15,
      paddingLeft: 10,
    },
  
    imgGoogle:{
      width: 25,
      height: 25,
    },
  
    RecoverPassword:{
      fontSize: 12,
      textAlign: "center",
      marginTop: '7%',
    }
  });
export default Register