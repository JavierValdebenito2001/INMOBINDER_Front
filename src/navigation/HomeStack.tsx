import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";

//Importar pantallas
importar Home, import dashboar 


const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen 
                name = {screen.home.home} 
                component={home}        
            />

            
        </Stack.Navigator>    
    );
}





