import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Vibration,
} from "react-native";

export default function App() {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your Name"
        onChangeText={setName}
        value={name}
        autoCapitalize="none"
      />
      <Text>Your Number</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your Number"
        keyboardType="phone-pad"
        onChangeText={setNumber}
        value={number}
      />

      <Pressable
        onPress={() => setResult(name + " " + number)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightblue" : "pink" },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0b0d5",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
