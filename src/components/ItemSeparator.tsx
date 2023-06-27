import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        opacity: 0.4,
        marginVertical: 8,
        borderBottomColor: dividerColor,
      }}
    />
  );
};

export default ItemSeparator;
