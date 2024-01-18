import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Structure/Main';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Homee" 
                component={Main} 
                options={{headerTitle:'UberEats',headerShown:false, headerTitleAlign:'center'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

  
  export default MainStack