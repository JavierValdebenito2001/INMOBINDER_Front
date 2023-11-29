import { View, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import { Button, Text } from '@rneui/themed';
import { styles } from '../../styles.tsx';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { styleRegister } from './RegisterScreenStyles.tsx';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/ScreenName.tsx';
import { Image } from '@rneui/base';

export function RegisterScreen() {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
      Cairo_700Bold,
      Cairo_400Regular,
    });
  
    if (!fontsLoaded) {
      return null;
    }

    function handleLoginPress(){
      navigation.navigate(screen.account.login);
    }

    function handleBack(){
      navigation.navigate(screen.account.home);
    }

    function handlePerson(){
      navigation.navigate(screen.account.registerPerson);
    }

    function handleRealEstate(){
      navigation.navigate(screen.account.registerRealEstate);
    }

    function handlePropertyBroker(){
      navigation.navigate(screen.account.registerPropertyBroker);
    }
  
    return (
      
      <SafeAreaView style={styles.container}>

        <TouchableOpacity style={styles.back} onPress={handleBack}>
          <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
          <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 24 }}> atrás </Text>
        </TouchableOpacity>
  
        <View style={styles.header}>
           <Image source={require('../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
        </View>
  
        <View style={styleRegister.registerContainer}>
          <Text style={{ ...styleRegister.registerText, fontFamily: 'Cairo_700Bold' }}> Registrar como: </Text>
  
          <Button buttonStyle={styleRegister.registerBtn} containerStyle={styleRegister.containerBtnRegister} onPress={handlePerson}>
            <View style={styleRegister.optionRegisterText}>
              <Text style={{ ...styleRegister.optionRegister, fontFamily: 'Cairo_700Bold' }}> Persona natural </Text>
            </View>
            <Ionicons name="person" style={styleRegister.iconRegister} />
          </Button>
  
          <Button buttonStyle={styleRegister.registerBtn} containerStyle={styleRegister.containerBtnRegister} onPress={handleRealEstate}>
            <View style={styleRegister.optionRegisterText}>
              <Text style={{ ...styleRegister.optionRegister, fontFamily: 'Cairo_700Bold' }}> Inmobiliaria </Text>
            </View>
            <FontAwesome5 name="home" style={styleRegister.iconRegister} />
          </Button>
  
          <Button buttonStyle={styleRegister.registerBtn} containerStyle={styleRegister.containerBtnRegister} onPress={handlePropertyBroker}>
            <View style={styleRegister.optionRegisterText}>
              <Text style={{ ...styleRegister.optionRegister, fontFamily: 'Cairo_700Bold' }}> Corredor </Text>
            </View>
            <MaterialCommunityIcons name="sign-real-estate" style={styleRegister.iconRegister} />
          </Button>
  
          <View style={styleRegister.footer}>
            <Text style={{ fontFamily: 'Cairo_400Regular', fontSize: 15 }}> ¿Ya tienes cuenta? </Text>
            <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 15 }} onPress={handleLoginPress}> Inicia sesión </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }