import React from "react";
import { ProductDetail } from "./ProductDetail";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens, TabScreens } from "..";

type ProductDetailScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.PRODUCT_DETAIL
>;

export const ProductDetailContainer = ({
  navigation,
}: ProductDetailScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <ProductDetail onNavigate={onNavigate} />;
};
