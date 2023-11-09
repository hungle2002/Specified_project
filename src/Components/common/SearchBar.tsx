import { i18n, LocalizationKey } from "@/Localization";
import React, {useState} from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Keyboard} from "react-native";
import { useAppSelector } from '@/Hooks'
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
//
//
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

let theme: ValidThemeColors = 'default';
interface SearchBarProps{
  onOpenCart: ()=> void;
}
export default function CustomSearchBar({onOpenCart}: SearchBarProps){
  theme = useAppSelector((state) => state.theme.theme);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [clicked, setClicked] = useState(false);
  const handleSearch = () => {
    console.log("Search"+ searchQuery);
    cancelSearch();
  };
  const cancelSearch = () => {
    if(searchQuery!="")setSearchQuery("");
    else
    {
    Keyboard.dismiss();
    setClicked(false);
    }
  };

  return (
    <View className="flex-row items-center" style={SearchBarstyles.container}>
      <View className="flex-row items-center flex-1" style={SearchBarstyles.inputContainer}>
        {!clicked && (
          <FontAwesome name="search" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
        )}
        <TextInput
        className="flex-1"
          style={SearchBarstyles.input}
          placeholder={i18n.t(LocalizationKey.SEARCH_PRODUCTS)}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onFocus={()=>{setClicked(true)}}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity className="items-center justify-center" style={SearchBarstyles.button} onPress={handleSearch}>
      <MaterialCommunityIcons name="image-search-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
      </TouchableOpacity>
      {clicked? (
        <TouchableOpacity className="items-center justify-center" style={SearchBarstyles.button} onPress={cancelSearch}>
        <MaterialCommunityIcons name="close" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].TEXT} />
        </TouchableOpacity>
      ):(
        <TouchableOpacity className="items-center justify-center" style={SearchBarstyles.button} onPress={onOpenCart}>
        <MaterialCommunityIcons name="cart-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
        </TouchableOpacity>
      )}
      
    </View>
  );
};
const SearchBarstyles = StyleSheet.create({
  container: {
    gap: MetricsSizes.LARGE_PADDING,
  },
  inputContainer: {
    gap:MetricsSizes.BASE_PADDING,
    backgroundColor: ThemeColors[theme].TRANSPARENT_0_5,
    borderRadius: MetricsSizes.LARGE_BRADIUS,
    paddingHorizontal: MetricsSizes.REGULAR,
    paddingVertical:MetricsSizes.SMALL,
    borderWidth: MetricsSizes.BORDER_WIDTH,
    borderColor: ThemeColors[theme].TEXT,
  },
  input: {
    fontSize: FontSize.REGULAR,
    color:ThemeColors[theme].SUBTEXT,
  },
  button: {
    width : MetricsSizes.SMALL_BUTTON,
    height : MetricsSizes.SMALL_BUTTON,
    borderRadius: MetricsSizes.SMALL_BUTTON/2,
    backgroundColor: ThemeColors[theme].BUTTON_SECONDARY,
    borderColor: ThemeColors[theme].BACKGROUND,
    borderWidth: MetricsSizes.BORDER_WIDTH,
  },
});
//
//
//////////////////