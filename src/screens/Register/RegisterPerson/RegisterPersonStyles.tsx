import { StyleSheet } from "react-native";

export const stylePerson = StyleSheet.create({

    registerContainer:{
        width: '90%',
        height: '70%',
        borderRadius: 20,
        alignItems: "center",
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
        shadowOpacity: 1,
    },

    registerText:{
        marginTop: '5%',
        color: 'rgb(9,27,43)',
        fontSize: 30,
    },

    Img:{
        width: 24,
        height: 24,
    },

    registerGoogle:{
        flexDirection: "row",
        marginTop: "7%",
        width: 300,
        height: 40,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, )",
        backgroundColor: 'rgb(255, 255, 255)',
        shadowOpacity: 1,
    },

    text:{
        fontSize: 13,
        marginTop: '7%',
    },
    input: {  
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
    }, 

    text1:{
        fontSize:13,
        textDecorationLine: "underline",
    },

    separator:{
        borderBottomWidth: 1, 
        borderColor: 'rgb(152,152,152)',    
        width: '90%',
        marginTop: '7%',
    },

    textRegisterEmail:{
        fontSize: 18,
        marginTop: '7%',
    },

    inputRegisterEmail:{
        width: "90%",
        height: 45,
        marginTop: '7%',
        borderColor: 'rgb(152,152,152)',
        borderWidth: 1,
        flexDirection: "row"
    },

    btnContinuer:{
        backgroundColor: 'rgb(9,27,43)',
        borderRadius: 10,
        width: 100,
        height: 40,
        marginTop: '10%',
        justifyContent: "center",       
    },

    textBtn:{
        color: 'rgb(255,255,255)',
        fontSize: 14,
    }







});