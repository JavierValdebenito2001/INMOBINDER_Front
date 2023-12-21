import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { Dashboard } from '../screens/Home/Dashboard';


const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

export default HomeStack;
