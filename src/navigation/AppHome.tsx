import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AccountStack } from './AccountStack';
import { screen } from '../utils/ScreenName';
import { styles } from '../screens/styles';



export  function AppNavigationHome() {

    const Tab = createBottomTabNavigator();

  return (
    <>
        <Tab.Navigator sceneContainerStyle={{backgroundColor: 'rgb(255,255,255)', flex: 1}} screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarVisible: false,
            tabBarStyle: {
                display: 'none',
            }
    
        })}>

    
            <Tab.Screen name = {screen.account.tab} component={AccountStack}/>
        

        </Tab.Navigator>
    
    </>
  )
}