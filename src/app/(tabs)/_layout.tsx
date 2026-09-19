import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007bff",      // Колір активної вкладки (синій)
        tabBarInactiveTintColor: "#8e8e93",    // Колір неактивної вкладки (сірий)
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          marginTop: 2,
        },
      }}
    >
      {/* Вкладка 1: Гра */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Гра",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-esports" size={size} color={color} />
          ),
        }}
      />

      {/* Вкладка 2: Статистика */}
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Статистика",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}