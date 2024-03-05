import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import { LoginScreen } from "../screens/Login/LoginScreen";
import { WelcomeScreen } from "../screens/Register/Welcome/WelcomeScreen";
import { RegisterScreen } from "../screens/Register/RegisterScreen/RegisterScreen";
import { RegisterPersonScreen } from "../screens/Register/NaturalPersonRegistration/RegisterNaturalPerson/RegisterPersonScreen";
import { PersonIndependientScreen } from "../screens/Register/NaturalPersonRegistration/PersonIndependient/PersonIndependientScreen";
import { RegisterRealEstateScreen } from "../screens/Register/RealEstateRegistration/RegisterRealEstate/RegisterRealEstateScreen";
import { RegisterPropertyBrokerScreen } from "../screens/Register/RunnersRegistration/RegisterPropertyBroker/RegisterPropertyBrokerScreen";
import { AgencyREScreen } from "../screens/Register/RealEstateRegistration/AgencyRealEstate/AgencyRScreen";
import { RecoverPasswordScreen } from "../screens/RecoverPassword/RecoverPasswordScreen";

import Dashboard from "../screens/Home/Dashboard";
import Help from "../screens/Home/Help";
import Config from "../components/Config";
import Profile from "../components/Profile";
import { MainDrawer } from "../components/MainDrawer";
import { AddHomeScreen } from "../screens/AddHome/AddHomeScreen";
import MisPublicaciones from "../screens/Publicaciones/MisPublicaciones";
import { WishPropertyScreen } from "../screens/WishProperty/WishPropertyScreen";
import { AddHomeGalleryScreen } from "../screens/AddHome/Gallery/AddHomeGalleryScreen";
import { AddHomeVideosScreen } from "../screens/AddHome/Videos/AddHomeVideosScreen";
import CentroDeAyuda from "../components/CentroDeAyuda";
import Details from "../screens/Publicaciones/Details";
import Mensajes from "../components/Mensajes";
import EditProfile from "../components/EditProfile";
import MapScreen from "../screens/Home/MapScreen";
import ProfileVerificationScreen from "../screens/Register/RunnersRegistration/ProfileVerificationIB/ProfileVerificationScreen";
import { IndependentBrokerScreen } from "../screens/Register/RunnersRegistration/IndependentBroker/IndependentBrokerScreen";
import { BrokerageAgencyScreen } from "../screens/Register/RunnersRegistration/BrokerageAgency/BrokerageAgencyScreen";
import ProfileVerificationBA from "../screens/Register/RunnersRegistration/ProfileVerificationBA/ProfileVerificationBA";
import ProfileVerificationRE from "../screens/Register/RealEstateRegistration/ProfileVerificationRE/ProfileVerificationRE";
import ProfileVerificationNPScreen from "../screens/Register/NaturalPersonRegistration/ProfileVerificationNP/ProfileVerificationNPScreen";
import EditPasword from "../components/EditPassword";
import Verification from "../components/Verification";




// Crear un Stack Navigatorr
const Stack = createNativeStackNavigator();

// Función que devuelve el Stack Navigator para la gestión de la navegación de la cuenta
export function AccountStack() {
    return (
        // Configuración del Stack Navigator
        <Stack.Navigator screenOptions={{
            headerShown: false, // No mostrar el encabezado predeterminado en las pantallas
        }}>
            {/* Definición de pantallas */}
            <Stack.Screen 
                name={screen.account.WelcomeScreen}
                component={WelcomeScreen}
            />

            <Stack.Screen 
                name={screen.account.EditProfile} 
                component={EditProfile}        
            />

            <Stack.Screen 
                name={screen.account.login} 
                component={LoginScreen} 
            />

            <Stack.Screen 
                name={screen.account.Details} 
                component={Details} 
            />

            <Stack.Screen 
                name={screen.account.profile} 
                component={Profile} 
            />

            <Stack.Screen 
                name={screen.account.optionRegister}
                component={RegisterScreen}            
            />

            <Stack.Screen
                name={screen.account.registerPerson}
                component={RegisterPersonScreen}
            />

            <Stack.Screen
                name={screen.account.Config}
                component={Config}
            />

            <Stack.Screen 
                name={screen.account.personIndependient}
                component={PersonIndependientScreen}
            />

            <Stack.Screen 
                name={screen.account.registerRealEstate}
                component={RegisterRealEstateScreen}
            />

            <Stack.Screen
                name={screen.account.agencyRealEstate}
                component={AgencyREScreen}
            />

            <Stack.Screen
                name={screen.account.registerPropertyBroker}
                component={RegisterPropertyBrokerScreen}
            />

            <Stack.Screen 
                name={screen.account.recoverPassword}
                component={RecoverPasswordScreen}
            />

            <Stack.Screen 
                name={screen.account.MapScreen}
                component={MapScreen}
            />

            <Stack.Screen 
                name={screen.account.MainDrawer}
                component={MainDrawer}
            />

            <Stack.Screen 
                name={screen.account.Help}
                component={Help}
            />

            <Stack.Screen 
                name={screen.account.addHome}
                component={AddHomeScreen}
            />

            <Stack.Screen 
                name={screen.account.addHomeGallery}
                component={AddHomeGalleryScreen}
            />

            <Stack.Screen 
                name={screen.account.addHomeVideos}
                component={AddHomeVideosScreen}
            />

            <Stack.Screen 
                name={screen.account.MisPublicaciones}
                component={MisPublicaciones}
            />

            <Stack.Screen 
                name={screen.account.WishProperty}
                component={WishPropertyScreen}
            />
            <Stack.Screen 
                name={screen.account.CentroDeAyuda}
                component={CentroDeAyuda}
            />
            <Stack.Screen 
                name={screen.account.Mensajes}
                component={Mensajes}
            />
            <Stack.Screen 
                name={screen.account.ProfileVerificationScreen}
                component={ProfileVerificationScreen}
            />
            <Stack.Screen 
                name={screen.account.IndependentBrokerScreen}
                component={IndependentBrokerScreen}
            />
            <Stack.Screen 
                name={screen.account.BrokerageAgencyScreen}
                component={BrokerageAgencyScreen}
            />
            <Stack.Screen 
                name={screen.account.ProfileVerificationBA}
                component={ProfileVerificationBA}
            />
                <Stack.Screen 
                name={screen.account.ProfileVerificationRE}
                component={ProfileVerificationRE}
            />
                <Stack.Screen 
                name={screen.account.ProfileVerificationNPScreen}
                component={ProfileVerificationNPScreen}
            />
                <Stack.Screen
                name={screen.account.EditPasword}
                component={EditPasword}
            />
                <Stack.Screen
                name={screen.account.verification}
                component={Verification}
            />
            
        </Stack.Navigator>    
    );
}
