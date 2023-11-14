import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';

let theme: ValidThemeColors = 'default';

interface ButtonProps {
  title: string;
  isAvail: boolean;
}

export default function RadioProductOption ({title, isAvail}:ButtonProps){
  const [isSelected, setIsSelected] = useState(false);
  return(
    <TouchableOpacity className="rounded-lg border-[1.5px] px-5 py-2 mr-4"style={isAvail?(isSelected?styles.selected:styles.Available):styles.unAvailable} onPress={()=>setIsSelected(!isSelected)} disabled={!isAvail}>
        <Text style={isAvail?(isSelected?styles.selectedText:styles.AvailableText):styles.unAvailableText}>{title}</Text>
    </TouchableOpacity>
  );
};

export function RadioColorOption ({title, isAvail}:ButtonProps){
  const [isSelected, setIsSelected] = useState(false);
  return(
    <TouchableOpacity className="border-[1.5px] rounded-full px-5 py-2 mr-4"style={isAvail?(isSelected?styles.selected:styles.Available):styles.unAvailable} onPress={()=>setIsSelected(!isSelected)} disabled={!isAvail}>
        <Text style={isAvail?(isSelected?styles.selectedText:styles.AvailableText):styles.unAvailableText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    unAvailable:{
      borderColor:ThemeColors[theme].SUBTEXT,
    },
    unAvailableText:{
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].SUBTEXT,
    },
    Available:{
      borderColor:ThemeColors[theme].SECONDARY,
    },
    AvailableText:{
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].SECONDARY,
    },
    selected:{
      backgroundColor: ThemeColors[theme].SECONDARY,
      borderColor:ThemeColors[theme].SECONDARY,
    },
    selectedText:{
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].BUTTON_SECONDARY,
    }
    
});