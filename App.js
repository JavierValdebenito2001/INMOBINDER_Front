import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppNavigationHome } from './src/navigation/AppHome';
import MainDrawer from './src/components/MainDrawer';

export default function App() {

  const myTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)'
    },
  };
  
  return (

        <NavigationContainer theme={myTheme}>
          <AppNavigationHome />
        </NavigationContainer>
       
  );
}


