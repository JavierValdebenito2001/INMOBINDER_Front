import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppNavigationHome } from './src/navigation/AppHome';
import MisPublicaciones from './src/screens/Publicaciones/MisPublicaciones';

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

          {/*<AppNavigationHome />*/}
          <MisPublicaciones />

        </NavigationContainer>
       
  );
}


