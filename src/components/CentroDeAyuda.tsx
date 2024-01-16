import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../utils/ScreenName';

const anchopantalla = Dimensions.get('window').width;

const CentroDeAyuda = () => {
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate(screen.account.MainDrawer);
    }

    return (
        <View>
            <Text>Jonathan wekito</Text>
            <TouchableOpacity style={styles.back} onPress={handleBack}>
                <Ionicons name="chevron-back" size={45} style={styles.logoBack} />
                <Text style={AddHomeGalleryStyles.backText}>atrás</Text>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Centro de Ayuda</Text>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableWithoutFeedback onPress={() => Alert.alert('Ayuda con problemas de seguridad')}>
                    <Text style={styles.option}>Ayuda con problemas de seguridad</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Alert.alert('Reportar fraude')}>
                    <Text style={styles.option}>Reportar fraude</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Alert.alert('Reportar problema de funcionamiento')}>
                    <Text style={styles.option}>Reportar problema de funcionamiento</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Alert.alert('Contactar a soporte')}>
                    <Text style={styles.option}>Contactar a soporte</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Alert.alert('Enviar comentarios')}>
                    <Text style={styles.option}>Enviar comentarios</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 90,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        marginBottom: 40,
        fontWeight: 'bold',
    },
    optionsContainer: {
        alignItems: 'flex-start',
        marginLeft: 30,
        marginTop: 50,
        width: anchopantalla * 0.5,
    },
    option: {
        fontSize: 20,
        marginBottom: 60,
        fontWeight: 'bold',
    },
    logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
        flexDirection: 'row',
    },
});

export default CentroDeAyuda;
