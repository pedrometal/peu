import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PEDRO FILIPE </Text>

      <Image
  source={require("../assets/images/36a154c5-eb1f-4322-8d78-3b3a08273e94.jpg")}
  style={styles.profileImage}
/>


      <View style={styles.buttonGroup}>
        <Link href="/sobre" asChild>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>SOBRE</Text>
          </Pressable>
        </Link>

        <Link href="/experiencia" asChild>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>EXPERIÊNCIA</Text>
          </Pressable>
        </Link>

        <Link href="/projeto" asChild>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>PROJETO</Text>
          </Pressable>
        </Link>

        <Link href="/jogo" asChild>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>JOGO</Text>
          </Pressable>
        </Link>

        <Link href="/contato" asChild>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>CONTATO</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9", 
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0f172a", 
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 32,
    borderWidth: 3,
    borderColor: "#1e293b", 
  },
  buttonGroup: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#e2e8f0", 
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  buttonPressed: {
    backgroundColor: "#cbd5e1",
  },
  buttonText: {
    color: "#1e293b", 
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
