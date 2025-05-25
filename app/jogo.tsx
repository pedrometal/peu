import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

function generateSecret(): string {
  const digits: string[] = [];
  while (digits.length < 4) {
    const rand = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(rand)) digits.push(rand);
  }
  return digits.join("");
}

function calculateBullsAndCows(secret: string, guess: string) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

export default function Jogo() {
  const [secret, setSecret] = useState("");
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState<{ guess: string; result: string }[]>(
    []
  );

  useEffect(() => {
    setSecret(generateSecret());
  }, []);

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4 || !/^\d+$/.test(guess)) {
      Alert.alert("Erro", "Digite 4 dígitos únicos (de 0 a 9).");
      return;
    }

    const { bulls, cows } = calculateBullsAndCows(secret, guess);
    const result = `${bulls} Bulls, ${cows} Cows`;

    setHistory((prev) => [{ guess, result }, ...prev]);
    setGuess("");

    if (bulls === 4) {
      Alert.alert("Parabéns!", "Você acertou a senha!", [
        { text: "Jogar Novamente", onPress: () => resetGame() },
      ]);
    }
  };

  const resetGame = () => {
    setSecret(generateSecret());
    setHistory([]);
    setGuess("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        value={guess}
        onChangeText={setGuess}
        placeholder="Digite sua tentativa"
        placeholderTextColor="#94a3b8"
      />

      <Button title="Enviar tentativa" onPress={handleGuess} />

      <Button
        title="Mostrar senha"
        onPress={() => Alert.alert("Senha Secreta", secret)}
        color="#64748b"
      />

      <FlatList
        style={styles.list}
        data={history}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.guess} ➜ {item.result}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tentativa ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f8fafc",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 12,
    textAlign: "center",
  },
  list: {
    marginTop: 20,
  },
  item: {
    color: "#f1f5f9",
    fontSize: 16,
    paddingVertical: 4,
  },
  empty: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 20,
  },
});
