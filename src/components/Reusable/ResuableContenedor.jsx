import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../Constants/theme'


const ResuableContenedor = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,

        borderColor: 'transparent',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 3,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4,
        elevation: 1,


    },
    innerContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 20,

        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,

        borderColor: 'transparent',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 3,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4,
        elevation: 2,
    },
});
export default ResuableContenedor