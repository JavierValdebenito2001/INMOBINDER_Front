import { Button, Image } from '@rneui/base';
import { View, StyleSheet, Text } from 'react-native';


export  function Login() {
  return (
   
    <View style= {styles.container}>
        
        <View style= {styles.header}>
           <Image source={require('../../assets/images/casa.png')} style={styles.logoImg}/> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style={styles.containerButton}>
          <Button buttonStyle={styles.btn} containerStyle={styles.btnContainer}> <Text style= {styles.btnText}> Iniciar sesión </Text></Button>
          <Button buttonStyle={styles.btn} containerStyle={styles.btnContainer}> <Text style= {styles.btnText} > Registrate </Text> </Button>
         </View>

        <View style={styles.containerImg}>  
            <Image source={require('../../assets/images/328018094_873765637024565_895130923640996288_n-removebg-preview.png')} style={styles.img}/>
            <Text>Creado por Agartha</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {     
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '25%',
    },
    containerButton: {
        marginTop: '15%',
        alignItems: 'center',       
      },
      containerImg:{
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      btn: {
          backgroundColor: '#FFFFF',
          borderColor: '#00000',
          borderWidth: 2,
          borderRadius: 40,
          width: 236,
          height: 70,
      },
      btnText: {
          color: "#00000",
          fontSize: 24,
          fontWeight: "bold",
          alignContent: "center",
      },
      btnContainer: {
          alignItems: "center",
          padding: 50,
      },
      img: {
          resizeMode: "center",
          width: 50,
          height: 50,
      },
      logoText: {
        color: '#00000',
        fontSize: 32,
        fontWeight: "bold",
      },
      logoImg: {
        resizeMode: 'center',
        width: 50,
        height: 50,
      },
    });
  