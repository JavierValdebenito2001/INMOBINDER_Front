import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: 2,
        borderRadius: 40,
        width: 236,
        height: 70,
        maxWidth: 500, // Añade un ancho máximo para evitar que el botón sea demasiado ancho en pantallas grandes

        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },

    btnContainer: {
        alignItems: "center",
        padding: 50,
    },

    containerImg:{
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
    },

    img: {
        resizeMode: "center",
        width: 50,
        height: 50,
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20%',
    },

    containerButton: {
        marginTop: '10%',
        alignItems: 'center',       
    },

    imgLogo: {
        width: 130,
        height: 130,
    }

});