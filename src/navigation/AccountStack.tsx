import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import { LoginScreen } from "../screens/Login/LoginScreen";
import { Home } from "../screens/Register/Home/HomeScreen";
import { RegisterScreen } from "../screens/Register/RegisterScreen/RegisterScreen";
import { RegisterPersonScreen } from "../screens/Register/RegisterPerson/RegisterPersonScreen";
import { PersonIndependientScreen } from "../screens/Register/Forms Register/PersonIndependient/PersonIndependientScreen";
import { RegisterRealEstateScreen } from "../screens/Register/RealEstate/RegisterRealEstateScreen";
import { RegisterPropertyBrokerScreen } from "../screens/Register/RegisterPropertyBroker/RegisterPropertyBrokerScreen";
import { AgencyREScreen } from "../screens/Register/Forms Register/AgencyRealEstate/AgencyRScreen";
import { RecoverPasswordScreen } from "../screens/RecoverPassword/RecoverPasswordScreen";



const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen 
                name = {screen.account.home} 
                component={Home}        
            />

            <Stack.Screen 
                name = {screen.account.login} 
                component={LoginScreen} 
            />

            <Stack.Screen 
                name = {screen.account.optionRegister}
                component={RegisterScreen}            
            />

            <Stack.Screen
                name= {screen.account.registerPerson}
                component={RegisterPersonScreen}
            />

            <Stack.Screen 
                name = {screen.account.personIndependient}
                component={PersonIndependientScreen}
            />

            <Stack.Screen 
                name = {screen.account.registerRealEstate}
                component={RegisterRealEstateScreen}
            />

            <Stack.Screen
                name = {screen.account.agencyRealEstate}
                component={AgencyREScreen}
            />

            <Stack.Screen
                name= {screen.account.registerPropertyBroker}
                component={RegisterPropertyBrokerScreen}
            />

            <Stack.Screen 
                name= {screen.account.recoverPassword}
                component={RecoverPasswordScreen}
            />
            

        </Stack.Navigator>    
    );
}