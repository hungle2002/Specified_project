import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { border } from "native-base/lib/typescript/theme/styled-system";

let theme: ValidThemeColors = 'default';

interface ButtonProps {
  title: string;
  isAvail: boolean;
}

export default function RadioColorOption ({title, isAvail}:ButtonProps){
  const [isSelected, setIsSelected] = useState(false);
  return(
    <TouchableOpacity className="rounded-full mr-4"style={{backgroundColor:title, width:MetricsSizes.SMALL_BUTTON, height: MetricsSizes.SMALL_BUTTON, borderColor: isSelected?ThemeColors[theme].SECONDARY:ThemeColors[theme].TEXT, borderWidth: isSelected?6:1, opacity:isAvail? 1: 0.2}} disabled={!isAvail} onPress={()=>setIsSelected(!isSelected)}>
        
    </TouchableOpacity>
  );
};
