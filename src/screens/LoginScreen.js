import { Button, Image } from '@rneui/base';
import { View, Text } from 'react-native';
import { styles } from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

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

