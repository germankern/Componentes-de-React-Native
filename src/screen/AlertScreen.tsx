import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Este es el titulo', 'Este el mensaje de la alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showPrompt = () => {
    // Ejemplo for Ios only
    // Alert.prompt(
    //   '¿Está seguro?',
    //   'Está acción no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   //   'secure-text',
    //   'plain-text',
    //   'Hola Mundo',
    //   'number-pad',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="AlertScreen" />

      <Button title="Mostrar Alerta" onPress={showAlert} />

      <View style={{marginBottom: 10}} />

      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;
