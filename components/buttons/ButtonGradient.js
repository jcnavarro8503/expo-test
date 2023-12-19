import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-svg";

export default function ButtonGradient() {
  console.log("button here");
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.button}
      >
        <Text style={styles.text}>Login</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    height: 50,
    width: 200,
  },
  text: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
  button: {
    width: "80%",
    height: 40,
  },
});
