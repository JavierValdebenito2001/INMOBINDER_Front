import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../../../styles'
import { styleProperty } from './RegisterPropertyBrokerStyles'
import { Ionicons } from '@expo/vector-icons';
import { Input, CheckBox, Text } from '@rneui/themed';
import { Button, Image } from '@rneui/base';
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../../utils/ScreenName';


export function RegisterPropertyBrokerScreen() {

    const navigation = useNavigation();

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false)

    const toggleCheckbox = () => {
        setChecked(!checked);
        setChecked1(false);
    };
    const toggleCheckbox1 = () => {
        setChecked1(!checked1);
        setChecked(false);
    };

    const [fontsLoaded] = useFonts({
        Cairo_700Bold,
        Cairo_400Regular,
    });
    
    if (!fontsLoaded) {
        return null;
    }
    
    function handleBack(){
        navigation.navigate(screen.account.optionRegister as never );
    }

    function handleTermsPress(){
        console.log("Terminos y condiciones");
    }
    function handleContinuer() {
        if (checked) {
            navigation.navigate(screen.account.BrokerageAgencyScreen as never);
        } else if (checked1) {
        navigation.navigate(screen.account.IndependentBrokerScreen as never);
        } else {
            console.log("Por favor, selecciona al menos una opción.");
        }
    }


return (
    <SafeAreaView style= {styles.container}>

        <TouchableOpacity style= {styles.back} onPress={handleBack}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {{fontFamily: 'Cairo_700Bold', fontSize: 24}}> atrás </Text>
        </TouchableOpacity>

        <View style={styles.header}> 
                <Image source={require('../../../../../assets/images/INMOBINDER-03.png')} style={styles.imgLogo} />
            </View>
        <View style={styleProperty.containerOption}> 
        
            <Text style={{ ...styleProperty.textRegister, fontFamily: 'Cairo_700Bold'}}> Regístrate </Text>
            <Text style={{ ...styleProperty.textRegisterEmail, fontFamily: 'Cairo_700Bold'}}> Registro mediante correo electrónico</Text>
            <Input placeholder='Ingresa el correo electrónico.' containerStyle={styleProperty.inputEmail}/>
            <Text style={{ ...styleProperty.text, fontFamily: 'Cairo_400Regular'}}> Al hacer clic en Continuar, aceptas los<Text style={{ ...styleProperty.text1, fontFamily: 'Cairo_700Bold'}} onPress={handleTermsPress}> Términos y condiciones de uso </Text>de Inmobinder.</Text>
            <Text style={{ ...styleProperty.textOptionTitle, fontFamily: 'Cairo_700Bold'}}> Seleccione la opción con la que se identifica: </Text>

        <View style={styleProperty.containerCheckBox}> 
            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor='rgb(0,0,0)'
                size={30}
                containerStyle={{marginLeft: 1}}
            />
            <Text style={{ ...styleProperty.textCheck, fontFamily: 'Cairo_700Bold'}}>Registro como Agencia de Corretaje            </Text>
        </View>
    <View> 
        <View style={styleProperty.containerCheckBox}> 
            <CheckBox
                checked={checked1}
                onPress={toggleCheckbox1}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor='rgb(0,0,0)'
                size={30}
                containerStyle={{marginLeft: 1}}
                
            />
            <Text style={{ ...styleProperty.textCheck, fontFamily: 'Cairo_700Bold'}}>Registro como corredor independiente        </Text>        
        </View>

        <View style={styleProperty.butonContainer}>
            <Button containerStyle={styleProperty.containerBtn} buttonStyle={styleProperty.btnStyle} onPress={handleContinuer}>
                <Text style={{ ...styleProperty.textBtn, fontFamily: 'Cairo_700Bold'}}> Continuar</Text>
            </Button>
        </View>
    </View>
        </View>

    </SafeAreaView>
)
}