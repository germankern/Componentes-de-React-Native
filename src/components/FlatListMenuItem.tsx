import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={24} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <Icon
          style={styles.arrowRight}
          name="chevron-forward-outline"
          size={24}
          color={colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
  },
});
