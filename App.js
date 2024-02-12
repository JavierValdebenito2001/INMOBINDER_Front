import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppNavigationHome } from './src/navigation/AppHome';
import MainDrawer from './src/components/MainDrawer';
import { ImageContext } from './src/screens/AddHome/Gallery/ImageContext'

export default function App() {
  const [images, setImages] = useState([]);
  const myTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)'
    },
  };
  
  return (
    <ImageContext.Provider value={{ images, setImages }}>
      <NavigationContainer theme={myTheme}>
          <AppNavigationHome />
        </NavigationContainer>
    </ImageContext.Provider>
        
       
  );
}


