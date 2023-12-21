import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';


export function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
    </View>

  );
}
