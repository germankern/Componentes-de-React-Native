import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import useForm from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  //
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {theme} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        {/* Esto es lo ultimo, es necesario? */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputScreen" />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: theme.dividerColor,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={theme.dividerColor}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: theme.dividerColor,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su email"
              placeholderTextColor={theme.dividerColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark" //Only for IOs
            />

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 2)} />

            <HeaderTitle title={JSON.stringify(form, null, 2)} />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: theme.dividerColor,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su telefono"
              placeholderTextColor={theme.dividerColor}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,

    height: 40,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginVertical: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },
  switchText: {
    fontSize: 24,
  },
});
