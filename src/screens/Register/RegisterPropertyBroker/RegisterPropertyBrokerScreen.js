import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import { styleProperty } from './RegisterPropertyBrokerStyles'
import { Ionicons } from '@expo/vector-icons';
import { Input, CheckBox } from '@rneui/themed';
import { Button } from '@rneui/base';


export function RegisterPropertyBrokerScreen() {

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false)
    const toggleCheckbox = () => setChecked(!checked);
    const toggleCheckbox1 = () => setChecked1(!checked1);


  return (
    <View style= {styles.container}>

        <View style= {styleProperty.back}>
            <Ionicons name="chevron-back" size={45} style={styles.logoBack}  />
            <Text style= {styles.textBack}> Atrás </Text>
        </View>

        <View style={styleProperty.header}> 
           <Ionicons name="home" size={45} color="black" /> 
           <Text style = {styles.logoText}> INMOBINDER </Text>
        </View>

        <View style={styleProperty.containerOption}> 
            <Text style={styleProperty.textRegister}> Regístrate </Text>
            <Text style={styleProperty.textRegisterEmail}> Registro mediante correo electrónico</Text>
            <Input placeholder='Ingresa el correo electrónico.' containerStyle={styleProperty.inputEmail}/>
            <Text style={styleProperty.text}> Al hacer clic en Continuar, aceptas los <Text style={styleProperty.text1}>Términos y condiciones de uso </Text>de Inmobinder.</Text>
            <Text style={styleProperty.textOptionTitle}> Seleccione la opción con la que se identifica: </Text>

        <View style={styleProperty.containerCheckBox}> 
            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor='rgb(0,0,0)'
                size={30}
                containerStyle={{marginLeft: 0}}
            />
            <Text style={styleProperty.textCheck}>Registro como Agencia de Corretaje       </Text>
        </View>

        <View style={styleProperty.containerCheckBox}> 
            <CheckBox
                checked={checked1}
                onPress={toggleCheckbox1}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor='rgb(0,0,0)'
                size={30}
                containerStyle={{marginLeft: 0}}
                
            />
            <Text style={styleProperty.textCheck}>Registro como corredor independiente   </Text>        
        </View>

        <View style={styleProperty.butonContainer}>
            <Button containerStyle={styleProperty.containerBtn} buttonStyle={styleProperty.btnStyle}>
                <Text style={styleProperty.textBtn}> Continuar</Text>
            </Button>
        </View>
      
        </View>

    </View>
  )
}