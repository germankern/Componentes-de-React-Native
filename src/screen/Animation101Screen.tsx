import React, {useContext} from 'react';
import {Button} from 'react-native';

import {StyleSheet, View, Animated} from 'react-native';
import useAnimation from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const Animation101Screen = () => {
  //

  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <View style={{flexDirection: 'row', gap: 16}}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(100);
          }}
          color={colors.primary}
        />
        <Button title="FadeOut" onPress={fadeOut} color={colors.primary} />
      </View>
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
