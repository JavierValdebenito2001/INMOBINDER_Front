import { StyleSheet } from "react-native";

export const AddHomeGalleryStyles = StyleSheet.create({

    containerAddHomeGallery:{    
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

    containerScroll:{
        flex: 1,
        alignItems: 'center', 
        paddingBottom: '5%',
    },

    container:{
        flex: 1,
    },

    text:{
        fontSize: 15,
        lineHeight: 30,
        fontFamily: 'Cairo_700Bold',
    },

    backText:{
        fontFamily: 'Cairo_700Bold', 
        fontSize: 24, 
        lineHeight: 48,
    },

    textAddHomeTitle:{
        fontFamily: 'Cairo_700Bold',
        fontSize: 28,
        lineHeight: 56,
        marginTop: '3%',
    },

    btnList:{
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: '5%',
        alignSelf: 'flex-end',
    },

    btnStyle:{
        backgroundColor: '#eff1f9',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 1,
        flexDirection: 'row',
        margin: 5,
    },

    btnIcons:{
        alignSelf: 'center', 
        marginRight: 2,
    },

});