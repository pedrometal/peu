import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.description}>
        Olá! 👋 Meu nome é Pedro Filipe, sou estudante de Ciência da Computação na Universidade Católica de Pernambuco, atualmente no 5º período.
      </Text>
      <Text style={styles.description}>
        Tenho interesse por desenvolvimento de software, inteligência artificial, redes de computadores e aplicações mobile. Gosto de transformar ideias em soluções práticas com código.
      </Text>
      <Text style={styles.description}>
        Já desenvolvi projetos em Java, C, Python, SQL e atualmente estou explorando o mundo do React Native.
      </Text>
      <Text style={styles.description}>
        Sou curioso, dedicado e apaixonado por aprender coisas novas todos os dias!
      </Text>
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
    color: "#f8fafc",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: "#cbd5e1",
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
});
