import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';






const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;