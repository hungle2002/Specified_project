import React from "react";
import { Cart } from "./Cart";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens, TabScreens } from "..";

type CartScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.CART
>;

export const CartContainer = ({
  navigation,
}: CartScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Cart onNavigate={onNavigate} />;
};
