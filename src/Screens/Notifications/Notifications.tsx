import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
import { User } from "@/Services";
import { setDefaultTheme, changeTheme } from "@/Store/reducers";
import { useAppDispatch, useAppSelector } from '@/Hooks'
import { ThemeColors } from "@/Theme";

export interface INotificationsProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Notifications = (props: INotificationsProps) => {  
  const { data, isLoading } = props;

  const theme = useAppSelector( state => state.theme.theme )
  const dispatch = useAppDispatch()

  return (
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
          <Text className={`text-[${ThemeColors[theme].ERROR}]`}>{i18n.t(LocalizationKey.NOTIFICATIONS)}</Text>
          <Text className="font-bold text-lg text-[#28a745]">{i18n.t(LocalizationKey.NOTIFICATIONS)}</Text>
          <Button onPress={() => dispatch(changeTheme( {theme: 'custom1'} ))}>
            Change Theme
          </Button>
          <Heading color="primary.500" fontSize="md">
            {data?.username}
          </Heading>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
