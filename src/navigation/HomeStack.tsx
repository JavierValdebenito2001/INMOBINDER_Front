import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { MapScreen } from '../screens/Home/MapScreen';
import Dashboard from '../screens/Home/Dashboard';



const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

export default HomeStack;
