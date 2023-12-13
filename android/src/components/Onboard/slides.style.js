import { StyleSheet, } from 'react-native'
import { COLORS, SIZES } from '../../Constants/theme'

const styles = StyleSheet.create({

    image: {
        width: SIZES.width,
        height: 300,
        resizeMode: 'cover'
    },
    stack: {

        bottom: 0,
        marginBottom: 40,
        marginHorizontal: 20,
      

    },

})

export default styles