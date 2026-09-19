import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface TitleGameProps {
  title: string;
}

export function TitleGame({ title }: TitleGameProps) {
  return (
  <View>
    <Text style={styles.title}>{title}</Text> 
    <View style={styles.icons}>
      <AntDesign name="alert" size={22} color="red" />
      <AntDesign name="amazon" size={22} color="green" />
      <AntDesign name="audio" size={22} color="red" />
      <AntDesign name="barcode" size={22} color="green" />
      <AntDesign name="bell" size={22} color="red" />
      <AntDesign name="car" size={22} color="green" />
    </View>
    
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#2c3e50",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
  }
});