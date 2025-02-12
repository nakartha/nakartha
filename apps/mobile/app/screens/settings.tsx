import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../type/Navigator";
import Screen from "@/app/components/global/Screen";
export const SettingsScreen = () => {
  const { replace } =
    useNavigation<RootStackScreenProps<"settings">["navigation"]>();
  return (
    <Screen>
      <Button title="Home" onPress={() => replace("home")} />
    </Screen>
  );
};
