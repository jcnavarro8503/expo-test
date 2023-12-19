import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ButtonGradient from "./components/buttons/ButtonGradient";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subtitulo}>Sign in to your account</Text>

        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Password" />

        <ButtonGradient />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 16,
    color: "gray",
  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 40,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});
