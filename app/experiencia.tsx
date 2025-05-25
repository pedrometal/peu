import { StyleSheet, Text, View } from "react-native";

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acadêmica 🎓</Text>
        <Text style={styles.text}>Graduando em Ciência da Computação</Text>
        <Text style={styles.text}>5º Período - Universidade Católica de Pernambuco</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profissional 💼</Text>
        <Text style={styles.text}>Experiência com:</Text>
        <Text style={styles.techList}>• Java</Text>
        <Text style={styles.techList}>• C</Text>
        <Text style={styles.techList}>• Python</Text>
        <Text style={styles.techList}>• SQL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", 
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#f1f5f9",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#e2e8f0",
    fontWeight: "600",
    marginBottom: 8,
  },
  text: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 4,
  },
  techList: {
    color: "#94a3b8",
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 2,
  },
});
