import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});


function RootNavigation() {

  const { isDarkMode } = useTheme()

  return (
    <>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default function RootLayout() {

  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>
        <RootNavigation />
      </ConvexProvider>
    </ThemeProvider>
  );
}
