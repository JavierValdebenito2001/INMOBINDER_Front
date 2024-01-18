import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerLogin:{    
        width: "90%",
        maxWidth: 500, // Añade un ancho máximo para evitar que el contenedor sea demasiado ancho en pantallas grandes
        height: "70%",
        borderRadius: 20,
        alignItems: "center",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
    },

    textLogin:{
        fontSize: 28,
        marginTop: '3%',
    },

    text1:{
        fontSize: 15,
    },

    text2:{
        fontSize: 10,
        width: "90%",
        marginLeft: "5%",
        marginTop: -10,
    },

    input:{
        width: '90%'
    },

    containerBtn:{
        alignItems: "center",
    },

    btnStyle:{
        backgroundColor: 'rgb(9,27,43)',
        borderRadius: 10,
        width: 100,
        height: 40,
        marginTop: '10%',
        shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowColor: "rgba(0, 0, 0, 1)",
    },

    textBtn:{
        color: 'rgb(255,255,255)',
        fontSize: 14,
        textAlign: "center",
    },

    containerLoginGoogle:{
        justifyContent: "center",
        alignItems: 'center',
        width: 220,
        height: 40,
        borderRadius: 40,
        flexDirection: 'row',
        shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowColor: "rgba(0, 0, 0, 1)",
            backgroundColor: 'rgb(255, 255, 255)',
            marginTop: '3%',
    },

    loginGoogle:{
        fontSize: 15,
    },

    imgGoogle:{
        width: 25,
        height: 25,
    },

    RecoverPassword:{
        fontSize: 12,
        textAlign: "center",
        marginTop: '7%',
    }










});