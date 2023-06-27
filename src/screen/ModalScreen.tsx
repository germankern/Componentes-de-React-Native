import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={stylesModal.modalContainer}>
          <View style={stylesModal.modal}>
            <HeaderTitle title="Titulo del Modal" />
            <Text style={stylesModal.textModal}>Cuerpo del Modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const stylesModal = StyleSheet.create({
  modalContainer: {
    // width: 200,
    // height: 200,
    flex: 1,
    backgroundColor: 'rgba( 0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    paddingBottom: 16,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25, //sombra para IOs
    elevation: 8, //sombra para Android
  },
  textModal: {
    fontSize: 16,
    paddingVertical: 20,
  },
});
