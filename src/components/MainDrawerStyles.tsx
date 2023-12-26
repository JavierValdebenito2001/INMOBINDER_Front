import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    avatarContainer: {
        backgroundColor: '#2E2323',
        flex: 1,
    },
    avatar: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 100,      
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 50,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    avatarText: {
        fontSize: 10,
        fontWeight: 'bold',        // Negrita
        color: '#FFFFFF',         // Color del texto
        marginVertical: 5,      // Margen vertical (espacio arriba y abajo)
        marginHorizontal: 5,     // Margen horizontal (espacio a los lados)
        alignSelf: 'center'     // Posicionamiento propio en el extremo derecho
    },
    menuContainer: {
        marginVertical: 0,
        paddingVertical: 1,
        paddingHorizontal: 10,
    },

    menuTexto: {
        flex: 2,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        marginVertical:15,
        marginHorizontal: 0,
        alignSelf: 'flex-start'

    },

    menuTextoCerrarSesion: {
        fontSize: 15,
        fontWeight: 'bold',        // Negrita
        color: '#000000',         // Color del texto
        marginVertical: 50,      // Margen vertical (espacio arriba y abajo)
        marginHorizontal: 5,     // Margen horizontal (espacio a los lados)
        alignSelf: 'flex-start'     // Posicionamiento propio en el extremo derecho
    },

    menuLateralgestac: {
        width: 180,
        height: 100,      
        alignSelf: 'center',
        resizeMode: 'contain'
    },

    menuTextoDeteccionDianamica: {
        fontSize: 12,
        fontWeight: 'bold',        // Negrita
        color: '#000000',         // Color del texto
        marginVertical: 10,      // Margen vertical (espacio arriba y abajo)
        marginHorizontal:0,     // Margen horizontal (espacio a los lados)
        alignSelf: 'flex-start'     // Posicionamiento propio en el extremo derecho
    },

    switchContainer: {
        alignSelf: 'center',
        transform: [{ scaleX: 2 }, { scaleY: 2 }] // Aumentar el tamaño del botón
   },
    
    
    
    
    
});


