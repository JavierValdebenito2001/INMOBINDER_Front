import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ReusableBtn = ({ onPress, btnText, additionalStyles, btn, iconName, iconSize }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnContainer, additionalStyles]}>
      
      <View style={styles.btnContent}>
        {iconName && <FontAwesome5 name={iconName} style={[styles.icon, { fontSize: iconSize }]} />}
        <Text style={[styles.btnText, btn]}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({

  btnContainer: {
    
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D6DC',
    borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,

        borderColor: 'transparent',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 4,
        elevation: 3,

        
    },
    btnContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D4D6DC',
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      borderColor: 'transparent',
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 2,
      },
      shadowOpacity: 0,
      shadowRadius: 4,
      elevation: 2,
    },
    btnContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: 'black',
      margin: 4,
    },
    btnText: {
      marginRight: 4 
      
    },
});