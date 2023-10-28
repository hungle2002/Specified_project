import React, { useState, useEffect } from "react";
import { Home } from "./Home";
import { useLazyGetUserQuery } from "@/Services";
import { TabScreens } from '..';

interface IHomeContainerProps {
  navigation: {
    navigate: (string: TabScreens) => void;
  }
}

export const HomeContainer = (props: IHomeContainerProps) => {
  const onNavigate = (screen: TabScreens) => {
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
