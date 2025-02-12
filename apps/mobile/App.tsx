import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SettingsScreen } from "@/app/screens";
import { RootStackParamList } from "@/app/type/Navigator";
import { StatusBar } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TODO: Seperate the screens as authenticated and unauthenticated */}
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
