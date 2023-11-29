import { View, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { Modal } from 'react-native'
import { styles } from '../screens/styles'
import { useFonts, Cairo_700Bold, Cairo_400Regular } from '@expo-google-fonts/cairo';
import { TermsConditionsStyle } from './TermsAndConditionsStyles'


export function TermsAndConditions() {

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
    Cairo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleOption(){
    console.log('Cerrar modal');
  }


  return (        
        <Modal>
          <SafeAreaView style ={TermsConditionsStyle.containerTerms}> 
            <ScrollView> 

              <Text style={{  ...TermsConditionsStyle.text1 ,fontFamily: 'Cairo_400Regular' }}> Términos y condiciones </Text>
              <View style= {{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginLeft: '5%'}} ></View>
            
              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> Por favor, leer detenidamente estos términos y condiciones antes de utilizar nuestra aplicación móvil.
                  Al acceder y utilizar esta aplicación, aceptas estar sujeto a los siguientes términos y condiciones. Si no 
                  estás de acuerdo con alguno de estos términos, te pedimos que no utilices la aplicación.</Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 1. Aceptación de Términos </Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> Al utilizar la aplicación, aceptas cumplir con estos términos y condiciones, así como con todas las leyes y 
                    regulaciones aplicables. Si no estás de acuerdo con estos términos, te instamos a que dejes de utilizar la aplicación de 
                    inmediato.
              </Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 2. Uso de la Aplicación</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 2.1 La aplicación se proporciona únicamente para fines informativos de entretenimiento. No debes 
                    utilizarla de manera que viole cualquier ley, regulaión o derecho de terceros.
              </Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 2.2 No podrás utilizar la aplicación de manera que interfieras con su funcionamiento normal o con la seguridad de nuestros sistemas.</Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 3. Privacidad</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 3.1 Nuestra política de privacidad describe como recopilamos, utilizar y compartimos tus datos 
                    personales. Al utlizar la aplicación, aceptas nuestra política de privacidad.
              </Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 4. Propiedad Intelectual</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 4.1 Todos los derechos de propiedad inteleectual de la aplicación y su contenido son propiedad exclusiva de Agartha Marketing Agency o de sus licenciantes.</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 4.2 No puedes copiar, modificar, distribuir, vender ni realizar ingeniería inversa de la aplicación.</Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 5. Limitación de Responsabilidad</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 5.1 Agartha Marketing Agency no se hace responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de la aplicación.</Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 6. Cambios en los Términos y Condiciones</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> 6.1 Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la aplicación.</Text>

              <Text style={{ ...TermsConditionsStyle.text3, fontFamily: 'Cairo_700Bold'}}> 7. Contacto</Text>

              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> Si tienes alguna pregunta o comentario sobre estos términos y condiciones, por favor contáctanos en soporte@agencyagartha.cl</Text>
              
              <Text style={{ ...TermsConditionsStyle.text2, fontFamily: 'Cairo_400Regular' }}> Gracias por utilizar nuestra aplicación. ¡Esperamos que disfrutes de la experiencia! </Text>
              
              <View style={{flexDirection: 'row'}}> 
                <Text style={{ ...TermsConditionsStyle.textButton, fontFamily: 'Cairo_700Bold'}} onPress={handleOption}> Cancelar</Text>
                <Text style={{ ...TermsConditionsStyle.textButton, fontFamily: 'Cairo_700Bold', marginLeft: '50%'}} onPress={handleOption}> Acepto</Text>
              </View>

            </ScrollView>
          </SafeAreaView>
        </Modal>

      

  )
}