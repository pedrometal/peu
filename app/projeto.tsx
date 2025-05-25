import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function Projeto() {
  const abrirLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>

      <Pressable style={styles.button} onPress={() => abrirLink("https://github.com/pedrometal/PROJETOLUCAS")}>
        <Text style={styles.buttonText}>🔗 Projeto 1</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => abrirLink("https://github.com/pedrometal/web-jogodasenha")}>
        <Text style={styles.buttonText}>🔗 Projeto 2</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => abrirLink("https://github.com/TCarvalhoAraujo/ProjetoBancoDeDados")}>
        <Text style={styles.buttonText}>🔗 Projeto 3</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#f8fafc",
    fontWeight: "bold",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#1e3a8a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 16,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "#f1f5f9",
    fontSize: 16,
    fontWeight: "600",
  },
});
