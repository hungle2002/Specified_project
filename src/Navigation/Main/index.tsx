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

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  const theme = useAppSelector( state => state.theme.theme )
  return (
    <Tab.Navigator
    initialRouteName= "Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? "ios-home" : "ios-home-outline";
        } else if (route.name === 'Shopping') {
          iconName = focused ? "cart" : "cart-outline";
        } else if (route.name === 'Loyalty') {
          iconName = focused ? "cash" : "cash-outline";
        } else if (route.name === 'Notifications') {
          iconName = focused ? "notifications" : "notifications-outline";
        } else {
          iconName = focused ? "person" : "person-outline";
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
      <Tab.Screen name="Shopping" component={ShoppingContainer} />
      <Tab.Screen name="Loyalty" component={LoyaltyContainer} />
      <Tab.Screen name="Home" component={HomeContainer} 
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
              <Ionicons name={iconName} color={'white'} size={24}/>
            {/* <Icon
              name="pluscircle"
              size={Platform.OS === 'ios' ? 50 : 60}
              color={focused ? '#ff4162' : '#ff748c'}
            /> */}
          </View>
          },
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsContainer} />
      <Tab.Screen name="Account" component={ProfileContainer} />
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



