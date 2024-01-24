import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Structure/Main';
import TypeLogin from '../Structure/Login/TypeLogin.jsx';
import Register from '../Structure/Login/Register.jsx';
import LoginMain from '../Structure/Login/LoginMain.jsx';
import Login from '../Structure/Login/Login.jsx';
import Profile from '../Drawer/Components/Profile.jsx';
import Config from '../Drawer/Components/Config.jsx';
import CentroDeAyuda from '../Drawer/Components/CentroDeAyuda.jsx';
import Mensajes from '../Drawer/Components/Mensajes.jsx';
import MisPublicaciones from '../Drawer/Components/MisPublicaciones.jsx';
import EditProfile from '../Drawer/Components/EditProfile.jsx';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DrawerItem } from '@react-navigation/drawer';
import Details from '../Drawer/Components/Details.jsx';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName='LoginMain'>
      <Stack.Screen
        name="LoginMain"
        component={LoginMain}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="TypeLogin"
        component={TypeLogin}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>

  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='Perfill'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Perfill"
        component={Profile}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>

  );
}

function PublicacionesStack() {
  return (
    
        <Stack.Navigator
          initialRouteName='Publicaciones'
          screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Publicacioness" 
                component={MisPublicaciones} 
                options={{headerTitleAlign:'center'}}
                />
            <Stack.Screen 
                name="Detalles" 
                component={Details} 
                options={{headerTitleAlign:'center'}}
                />
        </Stack.Navigator>

  );
}

function DrawerS() {
  return (
    <Drawer.Navigator initialRouteName="Mapa" drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Mis Publicaciones" component={MisPublicaciones} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
      <Drawer.Screen name="Añadir Propiedad" component={Config} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
      <Drawer.Screen name="Propiedad Deseada" component={Config} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
      <Drawer.Screen name="Mensajes" component={Mensajes} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
      <Drawer.Screen name="Configuracion" component={Config} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
      <Drawer.Screen name="Centro de ayuda" component={CentroDeAyuda} options={{ headerTitleAlign: 'center', headerTitleStyle: { fontSize: 25, fontWeight: 'bold' } }} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

function verperfil(){
  navigation.navigate('ProfileStack');
  }

function cerrarsesion(){
  navigation.navigate('LoginStack');
  navigation.reset({
    index: 0,
    routes: [{ name: 'LoginStack' }],
  });
};  



  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#100', flex: 1 }}>
        <MaterialCommunityIcons name='camera' color={'#fff'} size={60} style={{ alignSelf: 'center', margin: 20, marginTop: 40 }} />
        <TouchableOpacity onPress={verperfil}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Ver perfil</Text>
        </TouchableOpacity>
        <Text>17.111.111-k</Text>
        <Text>Nombre Nombre Apellido Apellido</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar sesión"
        onPress={cerrarsesion}        
      />
    </DrawerContentScrollView>
  );
}





function Stackk() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginStack' screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="DrawerS" component={DrawerS} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stackk;
