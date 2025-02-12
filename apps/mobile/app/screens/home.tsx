import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../type/Navigator";
import Screen from "@/app/components/global/Screen";

export const HomeScreen = () => {
  const { replace } =
    useNavigation<RootStackScreenProps<"home">["navigation"]>();
  return (
    <Screen>
      <Button title="Settings" onPress={() => replace("settings")} />
    </Screen>
  );
};
