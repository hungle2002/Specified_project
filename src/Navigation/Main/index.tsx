import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { ShoppingContainer } from "@/Screens/Shopping";
import { LoyaltyContainer } from "@/Screens/Loyalty";
import { NotificationsContainer } from "@/Screens/Notifications";
import { ProfileContainer } from "@/Screens/Profile";
import { ThemeColors } from "@/Theme";
import { useAppSelector } from '@/Hooks'
import { TabScreens } from "@/Screens";

export type TabParamList = {
  [TabScreens.HOME]: undefined;
  [TabScreens.LOYALTY]: undefined;
  [TabScreens.NOTIFICATIONS]: undefined;
  [TabScreens.PROFILE]: undefined;
  [TabScreens.SHOPPING]: undefined;
};

enum NavigationIconList {
  IOS_HOME = "ios-home",
  IOS_HOME_OUTLINE = "ios-home-outline",
  CART = "cart",
  CART_OUTLINE = "cart-outline",
  CASH = "cash",
  CASH_OUTLNE = "cash-outline",
  NOTIFICATION = "notifications",
  NOTIFICATION_OUTLINE = "notifications-outline",
  PERSON = "person",
  PERSON_OUTLINE = "person-outline",
} 

const Tab = createBottomTabNavigator<TabParamList>();

// @refresh reset
export const MainNavigator = () => {
  const theme = useAppSelector( state => state.theme.theme )
  return (
    <Tab.Navigator
    initialRouteName= {TabScreens.HOME}
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName : NavigationIconList;
        if (route.name === TabScreens.SHOPPING) {
          iconName = focused ? NavigationIconList.CART : NavigationIconList.CART_OUTLINE;
        } else if (route.name === TabScreens.LOYALTY) {
          iconName = focused ? NavigationIconList.CASH : NavigationIconList.CASH_OUTLNE;
        } else if (route.name === TabScreens.NOTIFICATIONS) {
          iconName = focused ? NavigationIconList.NOTIFICATION : NavigationIconList.NOTIFICATION_OUTLINE;
        } else {
          iconName = focused ? NavigationIconList.PERSON : NavigationIconList.PERSON_OUTLINE;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color}/>;
      },
      tabBarStyle: {
        width: '100%',
        height: '7%',
        paddingTop: '2%',
        paddingBottom: '2%',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: 0,
      },
      tabBarActiveTintColor: ThemeColors[theme].PRIMARY,
      tabBarInactiveTintColor: ThemeColors[theme].SUBTEXT,
    })}
    >
      <Tab.Screen name={TabScreens.SHOPPING} component={ShoppingContainer} />
      <Tab.Screen name={TabScreens.LOYALTY}component={LoyaltyContainer} />
      <Tab.Screen name={TabScreens.HOME} component={HomeContainer} 
        options={{
          tabBarIcon:  ({ focused}) => {
            let iconName = "ios-home";
            let color = ThemeColors[theme].PRIMARY;
            // You can return any component that you like here!
            // return <Ionicons name={iconName} color={color} size={24}/>;
            return <View
              style={{
                top: -20,
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Ionicons name={NavigationIconList.IOS_HOME} color={'white'} size={24}/>
          </View>
          },
        }}
      />
      <Tab.Screen name={TabScreens.NOTIFICATIONS} component={NotificationsContainer} />
      <Tab.Screen name={TabScreens.PROFILE} component={ProfileContainer} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: -100,
  }
})



