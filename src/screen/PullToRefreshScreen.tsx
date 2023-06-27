import React, {useContext, useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('recargado');
      setRefreshing(false);
      setData('Texto inpulsado luego del refresh');
    }, 4000);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}} //Es para IOS baja el loading y cuando termina regresa a la altura de la  pantalla.
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={theme.dividerColor} //for Android
          colors={['red', 'yellow', 'green', 'blue']} //for Android
          // style={{backgroundColor: '#5856d6'}} //for IOs
          tintColor={theme.dark ? 'white' : 'black'} //for IOs
          // title="Refreshing" //for IOs
          // titleColor={'white'} //for IOs
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
