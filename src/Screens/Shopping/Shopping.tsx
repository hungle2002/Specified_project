import { i18n, LocalizationKey } from "@/Localization";
import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
import { User } from "@/Services";
import { setDefaultTheme, changeTheme } from "@/Store/reducers";
import { useAppDispatch, useAppSelector } from '@/Hooks'
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
//
//
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

let theme: ValidThemeColors = 'default';

const CustomSearchBar = () => {
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
    <View style={SearchBarstyles.container}>
      <View style={SearchBarstyles.inputContainer}>
        {!clicked && (
          <FontAwesome name="search" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
        )}
        <TextInput
          style={SearchBarstyles.input}
          placeholder={i18n.t(LocalizationKey.SEARCH_PRODUCTS)}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onFocus={()=>{setClicked(true)}}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity style={SearchBarstyles.button} onPress={handleSearch}>
      <MaterialCommunityIcons name="image-search-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
      </TouchableOpacity>
      {clicked? (
        <TouchableOpacity style={SearchBarstyles.button} onPress={cancelSearch}>
        <MaterialCommunityIcons name="close" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].TEXT} />
        </TouchableOpacity>
      ):(
        <TouchableOpacity style={SearchBarstyles.button} onPress={handleSearch}>
        <MaterialCommunityIcons name="cart-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
        </TouchableOpacity>
      )}
      
    </View>
  );
};
const SearchBarstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:MetricsSizes.BASE_PADDING,
    gap: MetricsSizes.LARGE_PADDING,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap:MetricsSizes.BASE_PADDING,
    backgroundColor: ThemeColors[theme].TRANSPARENT_0_5,
    borderRadius: MetricsSizes.BASE_BORDER_RADIUS,
    paddingHorizontal: MetricsSizes.REGULAR,
    paddingVertical:MetricsSizes.SMALL,
    borderWidth: MetricsSizes.BORDER_WIDTH,
    borderColor: ThemeColors[theme].TEXT
  },
  input: {
    flex: 1,
    fontSize: FontSize.REGULAR,
    color:ThemeColors[theme].SUBTEXT,
  },
  button: {
    alignItems: 'center',
    width : MetricsSizes.CIRCLE_BUTTON,
    height : MetricsSizes.CIRCLE_BUTTON,
    borderRadius: MetricsSizes.CIRCLE_BUTTON/2,
    backgroundColor: ThemeColors[theme].BUTTON_SECONDARY,
    justifyContent: "center",
  },
});
//
//

export interface IShoppingProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Shopping = (props: IShoppingProps) => {  
  const { data, isLoading } = props;

  const theme = useAppSelector( state => state.theme.theme )
  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            {i18n.t(LocalizationKey.LOADING)}
          </Heading>
        </HStack>
      ) : (
        <>
        <CustomSearchBar/>
          <Text className={`text-[${ThemeColors[theme].ERROR}]`}>{i18n.t(LocalizationKey.SHOPPING)}</Text>
          <Text className="font-bold text-lg text-[#28a745]">{i18n.t(LocalizationKey.SHOPPING)}</Text>
          <Button onPress={() => dispatch(changeTheme( {theme: 'custom1'} ))}>
            Change Theme
          </Button>
          <Heading color="primary.500" fontSize="md">
            {data?.username}
          </Heading>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
