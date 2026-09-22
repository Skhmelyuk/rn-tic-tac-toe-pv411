import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useGame } from "@/context/GameContext";
import { statisticsStyles as styles } from "@/styles/statisticsStyles";

export default function StatisticsScreen() {
  // Отримуємо реальні дані та функцію очищення з контексту
  const { stats, resetStats } = useGame();

  const handleConfirmReset = () => {
    resetStats();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Статистика ігор</Text>

        <View style={styles.grid}>
          {/* Картка 1: Загальна кількість зіграних партій */}
          <View style={[styles.card, styles.cardTotal]}>
            <MaterialIcons name="videogame-asset" size={32} color="#4b5563" />
            <Text style={styles.cardNumber}>{stats.totalGames}</Text>
            <Text style={styles.cardLabel}>Зіграно партій</Text>
          </View>

          {/* Картка 2: Перемоги гравця X */}
          <View style={[styles.card, styles.cardX]}>
            <Text style={styles.playerBadgeX}>X</Text>
            <Text style={styles.cardNumber}>{stats.winsX}</Text>
            <Text style={styles.cardLabel}>Перемог X</Text>
          </View>

          {/* Картка 3: Перемоги гравця O */}
          <View style={[styles.card, styles.cardO]}>
            <Text style={styles.playerBadgeO}>O</Text>
            <Text style={styles.cardNumber}>{stats.winsO}</Text>
            <Text style={styles.cardLabel}>Перемог O</Text>
          </View>

          {/* Картка 4: Нічиї */}
          <View style={[styles.card, styles.cardDraw]}>
            <MaterialIcons name="handshake" size={32} color="#f59e0b" />
            <Text style={styles.cardNumber}>{stats.draws}</Text>
            <Text style={styles.cardLabel}>Нічиїх</Text>
          </View>
        </View>

        {/* Кнопка скидання статистики */}
        <TouchableOpacity
          style={[
            styles.resetButton,
            stats.totalGames === 0 && styles.resetButtonDisabled,
          ]}
          onPress={handleConfirmReset}
          activeOpacity={0.8}
        >
          <MaterialIcons name="delete-outline" size={20} color="#ffffff" />
          <Text style={styles.resetText}>Очистити статистику</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
