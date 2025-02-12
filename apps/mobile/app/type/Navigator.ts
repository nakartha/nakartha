import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  home: undefined;
  settings: undefined;
  // TODO: Add more screens
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
