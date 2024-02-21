import { Button, Image } from '@rneui/base';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../../styles.tsx';
import { stylesHome } from './WelcomeScreenStyles.tsx';
import { useFonts, Cairo_700Bold } from '@expo-google-fonts/cairo';
import { screen } from '../../../utils/ScreenName.tsx';
import { useNavigation } from '@react-navigation/native';


// ... (importaciones)

export function WelcomeScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Cairo_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleLogin() {
    navigation.navigate(screen.account.login as never);
  }

  function handleRegister() {
    navigation.navigate(screen.account.optionRegister as never);
  }

  return (
    <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <View style={stylesHome.header}>
        <Image source={require('../../../../assets/images/INMOBINDER-03.png')} style={stylesHome.imgLogo} />
      </View>

      <View style={stylesHome.containerButton}>
        <Button buttonStyle={stylesHome.btn} containerStyle={stylesHome.btnContainer} onPress={handleLogin}>
          <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 24, lineHeight: 48 }}> Iniciar sesión </Text>
        </Button>
        <Button buttonStyle={stylesHome.btn} containerStyle={stylesHome.btnContainer} onPress={handleRegister}>
          <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 24, lineHeight: 48 }}> Registrate </Text>
        </Button>
      </View>

      <View style={stylesHome.containerImg}>
        <Image source={require('../../../../assets/images/328018094_873765637024565_895130923640996288_n-removebg-preview.png')} style={stylesHome.img} />
        <Text style={{ fontFamily: 'Cairo_700Bold', fontSize: 16, lineHeight: 32 }}>Creado por Agartha</Text>
      </View>
    </SafeAreaView>
  );
}
