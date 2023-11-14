import React from 'react';
// import { StatusBar } from "expo-status-bar";
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './Main';
import { WelcomeContainer } from '@/Screens/Welcome';
import { RootScreens } from '@/Screens';
import { CartContainer } from '@/Screens/Cart';
import { i18n, LocalizationKey } from '@/Localization';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { faBell, faCircleInfo, faChevronLeft, faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { useAppSelector } from '@/Hooks';
import { ProductDetailContainer } from '@/Screens/ProductDetail';

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.CART]: undefined;
  [RootScreens.PRODUCT_DETAIL]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
let theme: ValidThemeColors = 'default';

// @refresh reset
const ApplicationNavigator = () => {
  theme = useAppSelector((state) => state.theme.theme);

  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      >
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.CART}
          component={CartContainer}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: i18n.t(LocalizationKey.CART_TITLE),
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity className="border border-slate-200 rounded-full p-2" onPress={() => navigation.goBack()}>
                  <FontAwesomeIcon icon={faChevronLeft} size={18} color={ThemeColors[theme].SECONDARY} />
                </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faBars} size={20} color={ThemeColors[theme].SECONDARY} />
              </TouchableOpacity>
            ),
          })}
        />
        <RootStack.Screen
          name={RootScreens.PRODUCT_DETAIL}
          component={ProductDetailContainer}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: i18n.t(LocalizationKey.PRODUCT_DETAIL_TITLE),
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity className="border border-slate-200 rounded-full p-2" onPress={() => navigation.goBack()}>
                  <FontAwesomeIcon icon={faChevronLeft} size={18} color={ThemeColors[theme].SECONDARY} />
                </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity className="items-center justify-center border border-slate-200 rounded-full p-2" onPress={()=>navigation.navigate(RootScreens.CART)}>
                <MaterialCommunityIcons name="cart-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
              </TouchableOpacity>
            ),
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
