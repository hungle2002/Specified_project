import React from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'native-base';
import { ThemeColors, FontSize, ValidThemeColors } from '@/Theme';
import { useAppSelector } from '@/Hooks';
import { RootScreens, TabScreens } from '..';
import CustomButton from '@/Components/common/Button';

let theme: ValidThemeColors = 'default';

interface ICartProps {
  onNavigate: (string: RootScreens) => void;
}

export const Cart = (props: ICartProps) => {
  theme = useAppSelector((state) => state.theme.theme);

  return (
    <View style={styles.container}>
      <View style={styles.divideContainer} />
      <View>
        <Text>Xin chao cac ban</Text>
      </View>
      <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
      <CustomButton title='Click me' onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  divideContainer: {
    height: 9,
    width: '100%',
    backgroundColor: ThemeColors[theme].BACKGROUND,
  },
});
