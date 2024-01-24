import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Structure/Main';
import TypeLogin from '../Structure/Login/TypeLogin.jsx';
import Register from '../Structure/Login/Register.jsx';
import LoginMain  from '../Structure/Login/LoginMain.jsx';
import Login from '../Structure/Login/Login.jsx';
import Profile from '../Drawer/Components/Profile.jsx'; 
import Config from '../Drawer/Components/Config.jsx';
import CentroDeAyuda from '../Drawer/Components/CentroDeAyuda.jsx';
import Mensajes from '../Drawer/Components/Mensajes.jsx';
import MisPublicaciones from '../Drawer/Components/MisPublicaciones.jsx';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginStack() {
  return (
        <Stack.Navigator
          initialRouteName='LoginMain'>
            <Stack.Screen 
                name="LoginMain" 
                component={LoginMain} 
                options={{headerTitleAlign:'center'}}
                />
            <Stack.Screen 
                name="TypeLogin" 
                component={TypeLogin} 
                options={{headerTitleAlign:'center'}}
                />
            <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{headerTitleAlign:'center'}}
                />
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerTitleAlign:'center'}}
                />
        </Stack.Navigator>

  );
}

function DrawerS() {
  return (
      <Drawer.Navigator initialRouteName='Main'>
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="MisPublicaciones" component={MisPublicaciones} />
        <Drawer.Screen name="Agregar Publicaciones" component={Config} />
        <Drawer.Screen name="Mis Clientes" component={Config} />
        <Drawer.Screen name="Mensajes" component={Mensajes} />
        <Drawer.Screen name="Configuracion" component={Config} />
        <Drawer.Screen name="Centro de ayuda" component={CentroDeAyuda} />
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Cerrar sesion" component={LoginStack} />
      </Drawer.Navigator>
  );
}

function Stackk() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginStack' screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="DrawerS" component={DrawerS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stackk;
  