import { StyleSheet } from "react-native";

export const AddHomeStyles = StyleSheet.create({

    containerAddHome:{    
        width: "90%",
        height: "85%",
        borderRadius: 20,
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

    container:{
        flex: 1,
    },

    containerScroll:{
        alignItems: 'center', 
        paddingBottom: '5%',
    },

    backText:{
        fontFamily: 'Cairo_700Bold', 
        fontSize: 24, 
        lineHeight: 48,
    },

    imgUploadSize:{
        width: 130, 
        height: 123,
    },

    imgUpload:{
        margin: 10,
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

    textAddHomeTitle:{
        fontFamily: 'Cairo_700Bold',
        fontSize: 28,
        lineHeight: 56,
        marginTop: '3%',
    },

    dropdown:{
        fontFamily: 'Cairo_700Bold',
        backgroundColor: '#eff1f9',
        lineHeight: 30,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 1,
    },

    gastosComunes:{
        flexDirection: "row",
        alignItems: "center",
    },

    inputGastosComunes:{
        fontFamily: 'Cairo_700Bold',
        fontSize: 13,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 2,
        textAlign: 'center',
        
    },

    inputMetros:{
        fontFamily: 'Cairo_700Bold',
        fontSize: 13,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        textAlign: 'center',
        width: '40%',
    },

    input:{
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 4,
    },

    estado:{
        fontFamily: 'Cairo_700Bold',
        backgroundColor: 'red',
        fontSize: 15,
        lineHeight: 30,
        borderRadius: 4,
        padding: 4,
    },

    text1:{
        fontSize: 15,
    },

    text2:{
        fontSize: 15,
        lineHeight: 30,
        fontFamily: 'Cairo_700Bold',
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

    btnStyle2:{
        fontFamily: 'Cairo_700Bold',
        backgroundColor: '#eff1f9',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 1,
        flexDirection: 'row',
    },

    btnList2:{
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 4,
    },

    btnIcons:{
        alignSelf: 'center', 
        marginRight: 2,
    },

    btnList:{
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 4,
    },

    btnList3:{
        flex:1,
        margin:4,
    },

    ///////////

    dropdown2BtnStyle: {
        backgroundColor: '#eff1f9',
        borderRadius: 4,
        width: '45%',
        height: '100%',
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#eff1f9',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {
        backgroundColor: '#eff1f9', 
        borderBottomColor: '#C5C5C5'
    },

});