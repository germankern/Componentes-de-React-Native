import React, {useContext, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {
  View,
  SafeAreaView,
  ImageSourcePropType,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}: Props) => {
  //
  const [activeIndex, setActiveIndex] = useState(0);
  const {fadeIn, opacity} = useAnimation();
  const isVisible = useRef(false);
  const {theme} = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{...styles.title, color: theme.colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.subTitle, color: theme.colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={c => {this._carousel = c;}}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index == 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={styles.containerPagination}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            ...styles.pagination,
            backgroundColor: theme.colors.primary,
          }}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: theme.colors.primary}}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={styles.textButton}>Go Home</Text>
            <Icon name="home-outline" color={'white'} size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  containerPagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#5856D6',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#5856D6',
    width: 130,
    height: 45,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});
