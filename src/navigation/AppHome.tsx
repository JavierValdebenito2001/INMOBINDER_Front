import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountStack } from './AccountStack';
import { screen } from '../utils/ScreenName';


// Función que devuelve la navegación principal de la aplicación con pestañas inferiores
export function AppNavigationHome() {
    // Crear un Tab Navigator para las pestañas inferiores
    const Tab = createBottomTabNavigator();

    return (
        <>
            {/* Configuración del Tab Navigator */}
            <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'rgb(255,255,255)', flex: 1 }} screenOptions={() => ({
                headerShown: false, // No mostrar encabezado en las pantallas de las pestañas
                tabBarShowLabel: false, // No mostrar etiquetas en las pestañas
                tabBarVisible: false, // No mostrar la barra de pestañas
                tabBarStyle: {
                    display: 'none', // Ocultar completamente la barra de pestañas
                }

            })}>
                {/* Definición de pantalla de la pestaña de cuenta utilizando el Stack Navigator de AccountStack */}
                <Tab.Screen name={screen.account.tab} component={AccountStack} />
            </Tab.Navigator>
        </>
    );
}
