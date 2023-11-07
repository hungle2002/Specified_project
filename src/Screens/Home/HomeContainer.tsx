import React, { useState, useEffect } from "react";
import { Home } from "./Home";
import { useLazyGetUserQuery } from "@/Services";
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootScreens, TabScreens } from '..';
import { TabParamList } from "@/Navigation/Main";
import { RootStackParamList } from "@/Navigation";

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, TabScreens.HOME>,
  NativeStackScreenProps<RootStackParamList>
>;

export const HomeContainer = (props: HomeScreenProps) => {
  // props.navigation.goBack
  const onNavigate = (screen: TabScreens | RootScreens) => {
    props.navigation.navigate(screen);
  };

  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Home onNavigate={ onNavigate } />;
};
