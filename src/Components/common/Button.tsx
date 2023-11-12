import { Button } from "native-base";
import React from "react";
import { StyleSheet, Platform, StatusBar, GestureResponderEvent } from "react-native";
import { ThemeColors, FontSize, ValidThemeColors } from '@/Theme';
import { useAppSelector } from '@/Hooks';

let theme: ValidThemeColors = 'default';

interface IButtonProps {
  onPress: () => void,
  title: string,
  endIcon?: JSX.Element,
  startIcon?: JSX.Element,
  small? : boolean,
  medium?: boolean,
  large?: boolean,
}

export default function CustomButton( props: IButtonProps){
  theme = useAppSelector((state) => state.theme.theme);
  
  return <Button 
    style={{...style.general, ...style.small }} 
    onPress={props.onPress}
    startIcon={props.startIcon}
    endIcon={props.endIcon}
    _text={ {bold: true} }
    >Xin chao
    </Button>
}

const style = StyleSheet.create( {
  general: {
    backgroundColor: ThemeColors[theme].PRIMARY,
    borderRadius: 10,
    color: ThemeColors[theme].BUTTON_SECONDARY,
  },
  small: {
    width: 100,
    height: 50,
    fontWeight: 'semibold',
    fontSize: FontSize.LARGE,
  }
})
