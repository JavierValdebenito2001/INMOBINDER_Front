import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Structure/Main';
import TypeLogin from '../Structure/Login/TypeLogin.jsx';
import Register from '../Structure/Login/Register.jsx';
import LoginMain  from '../Structure/Login/LoginMain.jsx';
import Login from '../Structure/Login/Login.jsx';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Main} 
                options={{headerTitle:'Mapa', headerTitleAlign:'center'}}
                />
        </Stack.Navigator>
  );
}

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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='LoginStack'>
       
        <Drawer.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
  