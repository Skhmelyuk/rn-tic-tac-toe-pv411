import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GameProvider } from "@/context/GameContext";

export default function RootLayout() {
  return (
      <GameProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </GameProvider>
  );
}
