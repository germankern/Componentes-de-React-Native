import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Joker',
      'Supergirl',
      'Superboy',
      'Jonathan Samuel Kent',
      'Jimmy Olsen',
      'Lois Lane',
      'Darkseid',
      'Lex Luthor',
      'General Zod',
      'Erradicador',
      'Streaky, el Supergato',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Hulk',
      'Wolverine',
      'Capitán América',
      'Iron Man',
      'Deadpool',
      'Capitana Marvel',
      'Wolverine',
      'Black Widow',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Death Note',
      'Demon Slayer',
      'Akira',
      'Animatrix',
      'Paprika',
      'Vinland Saga',
      'Burbujas',
    ],
  },
];

const CustomSectionListScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 60}}>
            <HeaderTitle title={'Total de Casas ' + casas.length} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{color: theme.colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: theme.colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSectionListScreen;
