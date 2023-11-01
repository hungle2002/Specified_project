import { i18n, LocalizationKey } from "@/Localization";
import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button, Center } from "native-base";
import { User } from "@/Services";
import { setDefaultTheme, changeTheme } from "@/Store/reducers";
import { useAppDispatch, useAppSelector } from '@/Hooks'
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import SafeViewAndroid from '@/Components/common/SafeAreaViewAndroid';

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
        <TouchableOpacity className="items-center justify-center" style={SearchBarstyles.button} onPress={handleSearch}>
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

export interface IShoppingProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Shopping = (props: IShoppingProps) => {  
  const { data, isLoading } = props;

  const theme = useAppSelector( state => state.theme.theme )
  const dispatch = useAppDispatch()

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
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
            <View style={styles.toolbar}>
              <CustomSearchBar/>
              <View>
                <View className="flex-row items-center gap-[10px] ">
                  <TouchableOpacity className="justify-center items-center" style={styles.button} onPress={()=>{console.log("Sort Pop up");}}>
                    <MaterialCommunityIcons name="sort" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].BUTTON_SECONDARY} />
                  </TouchableOpacity>
                  <Text className="flex-1"style={styles.buttonTextSecondary}> {i18n.t(LocalizationKey.RECENTLY_RELEASED)} </Text>
                  <View className="h-full border-[0.2px]" style={styles.line}/>
                  <TouchableOpacity className="flex-row justify-center items-center" style={styles.button} onPress={()=>{console.log("Sort Pop up");}}>
                    <MaterialCommunityIcons name="view-grid-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].BUTTON_SECONDARY} />
                    <Text className="pl-1" style={styles.buttonTextPrimary}>{i18n.t(LocalizationKey.ALL)}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row justify-center items-center" style={styles.buttonSecondary} onPress={()=>{console.log("Sort Pop up");}}>
                    <MaterialCommunityIcons name="filter-menu-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
                    <Text className="pl-1" style={styles.buttonTextSecondary}>{i18n.t(LocalizationKey.FILTER)}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors[theme].BACKGROUND,
  },
  toolbar: {
    backgroundColor: ThemeColors[theme].INPUT_BACKGROUND,
    gap: MetricsSizes.BASE_PADDING,
    padding: MetricsSizes.BASE_PADDING,
  },
  line:{
    borderColor:ThemeColors[theme].SUBTEXT,
  },
  button: {
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    height:MetricsSizes.SMALL_BUTTON,
    borderRadius: MetricsSizes.BASE_BRADIUS,
    backgroundColor:ThemeColors[theme].PRIMARY,
  },
  buttonSecondary: {
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    height:MetricsSizes.SMALL_BUTTON,
    borderRadius: MetricsSizes.BASE_BRADIUS,
    backgroundColor:ThemeColors[theme].BUTTON_SECONDARY,
    borderColor: ThemeColors[theme].BACKGROUND,
    borderWidth: MetricsSizes.BORDER_WIDTH,
  },
  buttonTextPrimary:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].BUTTON_SECONDARY,
  },
  buttonTextSecondary:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].TEXT,
  }
});
