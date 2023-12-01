import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppNavigationHome } from './src/navigation/AppHome';

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


