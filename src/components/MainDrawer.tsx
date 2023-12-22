import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { HomeScreen } from '../screens/Home/HomeScreen';
import Dashboard from '../screens/Home/Dashboard';
import Help from '../screens/Home/Help';
import { styles } from './MainDrawerStyles';



//import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


export const MainDrawer = () => {

  return (
    <Drawer.Navigator 
  drawerContent={ (props) => <MenuInterno { ...props } /> }
  initialRouteName='HomeScreen'
    >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation}:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/INMOBINDER-03.png')}
        />
      </View>
        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.menuTexto}>Mi publicaciones</Text>
            </TouchableOpacity>
        </View>   

        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            >
              <Text style={styles.menuTexto}>Añadir propiedad</Text>
            </TouchableOpacity>
        </View>
        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            >
              <Text style={styles.menuTexto}>Propiedad deseada</Text>
            </TouchableOpacity>
        </View>
        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            >
              <Text style={styles.menuTexto}>Mensajes</Text>
            </TouchableOpacity>
        </View>
        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            >
              <Text style={styles.menuTexto}>Configuración</Text>
            </TouchableOpacity>
        </View>
        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            >
              <Text style={styles.menuTexto}>Centro de ayuda</Text>
            </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
       // onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.menuTextoCerrarSesion}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </View>

      
    </DrawerContentScrollView>
);

}

