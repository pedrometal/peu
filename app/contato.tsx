import { StyleSheet, Text, View } from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.subtitle}>Vamos conversar!</Text>
      <Text style={styles.info}>📧 pedro.firoma@icloud.com</Text>
      <Text style={styles.info}>📱 (81) 98281-1412</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", 
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    color: "#f1f5f9", 
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: "#cbd5e1", 
    marginBottom: 24,
  },
  info: {
    fontSize: 16,
    color: "#94a3b8", 
    marginBottom: 8,
  },
});
