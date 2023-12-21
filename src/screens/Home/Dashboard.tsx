
import { Text, View } from 'react-native'
import React from 'react'

export default function Dashboard() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard</Text>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sección 1</Text>
                <Text>Contenido de la sección 1...</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sección 2</Text>
                <Text>Contenido de la sección 2...</Text>
            </View>
            {/* Agrega más secciones según sea necesario */}
        </View>
    )
}