import { Shopping } from "./Shopping";
import type { CompositeScreenProps } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import { Product, useLazyGetUserQuery } from "@/Services";
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TabParamList } from "@/Navigation/Main";
import { RootStackParamList } from "@/Navigation";
import { RootScreens, TabScreens } from '..';

type ShoppingScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, TabScreens.SHOPPING>,
  NativeStackScreenProps<RootStackParamList>
>;

export const ShoppingContainer = (props: ShoppingScreenProps) => {
  const onNavigate = (screen: TabScreens | RootScreens) => {
    props.navigation.navigate(screen);
  };

  const handleProductClick = (product:Product) => {
    // Navigate to the product detail page with the selected product
    props.navigation.navigate(RootScreens.PRODUCT_DETAIL);
  };

  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Shopping onNavigate={ onNavigate } onProductClick={handleProductClick} />;
};
