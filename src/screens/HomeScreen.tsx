import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';

function HomeScreen() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Icon name="home" size={24} color="black" style={styles.icon} />
          <Text style={styles.titleText}>INMOBINDER</Text>
        </View>
      </View>
      {/* Resto de tu contenido */}
      <Modal
        transparent={true}
        visible={isMenuVisible}
        animationType="slide"
        onRequestClose={() => {
          toggleMenu();
        }}
      >
        <View style={styles.menuOverlay}>
          {/* Contenido del menú */}
          <Text>Menú</Text>
          <TouchableOpacity onPress={toggleMenu}>
            <Text>Cerrar Menú</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;
const menuWidth = Dimensions.get('window').width * 0.75; // El 75% del ancho de la pantalla

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: screenHeight * 0.15,
    marginLeft: 16, // Añadido para desplazar el ícono de las barras hacia la izquierda
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    marginRight: 8,
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 16,
    zIndex: 1,
    justifyContent: 'flex-start', // Alineación vertical arriba
    alignItems: 'flex-start', // Alineación horizontal a la izquierda
  },

  menuOverlay: {
    flex: 1,
    width: menuWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
