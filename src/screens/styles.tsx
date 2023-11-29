import { StyleSheet } from "react-native";






export const styles = StyleSheet.create({

    container: {     
        alignItems: 'center',
        flex: 1,
    },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },

      logoText: {
        color: 'rgb(0,0,0)',
        fontSize: 32,
        fontWeight: "bold",
      },

      imgLogo: {
        resizeMode: 'center',
        width: 100,
        height: 100,
      },

      logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
      },

      back:{
        flexDirection: "row",
        marginRight: "auto",
        alignItems: "center",
      },

    header:{
      flexDirection: 'row',
      alignItems: 'center',
  },


});