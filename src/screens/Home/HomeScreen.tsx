import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View>
      <Image source={require('../../../assets/images/INMOBINDER-03.png')}
        style={{ width: 100, height: 100, alignSelf: 'center', resizeMode: 'contain'}}
      />
      <View>
        <TextInput
          placeholder=" Buscar"
          style={{
            backgroundColor: '#FFFFFF',
            width: 300,
            height: 40,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#000000', // Dark border color
          }}
        />
      </View>
    </View>
    

  );
}
