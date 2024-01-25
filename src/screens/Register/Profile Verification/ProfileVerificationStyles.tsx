import { StyleSheet } from "react-native";

export const styleIndependient = StyleSheet.create({

  containerOption: {
    marginTop: '25%',
    width: '92%',
    height: '45%',
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

  textRegister:{
    marginTop: '5%',
    fontSize: 35,
    textDecorationLine: 'underline',
  },

  titulo: {
    fontSize: 30,
    marginTop: "5%",
    width: "90%",
  },
  containerbtnarchivo:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop: "5%",
    width: "90%",
  },
  
  containerBtn:{
    alignItems: "center",
  },
  btnStyle:{
    backgroundColor: 'rgba(217, 217, 217, 1)',
    justifyContent: 'center',   
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(152, 152, 152, 1)',
  },
  textBtn:{
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 17,
  },
  textContainer: {
    justifyContent: 'center', 
    fontSize: 13,
    color: 'rgba(152, 152, 152, 1)',
    marginLeft: "3%",   
  },
  contenttext:{
    marginTop: '5%',
  },
  text:{
    textAlign: 'left',
    fontFamily: 'Cairo_400Regular',
    color: 'rgba(152, 152, 152, 1)',
    fontSize: 14,
    left: -20,
  },
  containerbtns:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop: "5%",
    width: "90%",
    justifyContent: 'space-between',
  },
  containerBtn2:{
    alignItems: "center",
  },
  textOmitir:{
    color: 'rgba(9, 27, 43, 1)',
    fontSize: 20,
    fontFamily: 'Cairo_700Bold',

  },
  btnStyle2:{
    backgroundColor: 'rgba(9, 27, 43, 1)',
    justifyContent: 'center',   
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },
  textBtn2:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
  },
});