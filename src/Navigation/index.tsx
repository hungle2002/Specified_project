import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { ShoppingContainer } from '@/Screens/Shopping'
import { LoyaltyContainer } from "@/Screens/Loyalty";
import { NotificationsContainer } from "@/Screens/Notifications";
import { ProfileContainer } from "@/Screens/Profile";
import { RootScreens } from "@/Screens";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.SHOPPING]: undefined;
  [RootScreens.LOYALTY]: undefined;
  [RootScreens.PROFILE]: undefined;
  [RootScreens.NOTIFICATIONS]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
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
          name={RootScreens.SHOPPING}
          component={ShoppingContainer}
        />
        <RootStack.Screen
          name={RootScreens.LOYALTY}
          component={LoyaltyContainer}
        />
        <RootStack.Screen
          name={RootScreens.NOTIFICATIONS}
          component={NotificationsContainer}
        />
        <RootStack.Screen
          name={RootScreens.PROFILE}
          component={ProfileContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
