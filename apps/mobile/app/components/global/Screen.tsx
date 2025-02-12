import React, { useMemo } from "react";
import { View, StyleSheet, ViewProps, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
  safeArea?: boolean;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  safeArea = true,
  style,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = useMemo(
    () => ({
      paddingTop: safeArea ? insets.top : 0,
      paddingBottom: safeArea ? insets.bottom : 0,
      paddingLeft: safeArea ? insets.left : 0,
      paddingRight: safeArea ? insets.right : 0,
    }),
    [insets, safeArea]
  );

  return (
    <View style={[styles.container, safeAreaStyle, style]} {...rest}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
