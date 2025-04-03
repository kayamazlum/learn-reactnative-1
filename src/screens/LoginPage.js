import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import Loading from "../components/Loading";

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.image}
      />
      <Text style={styles.welcome}>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
        inputMode="email"
        style={styles.textInputStyle}
        placeholder="Enter Your Email"
        onChangeText={setName}
        value={name}
        autoCapitalize="none"
      />

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textInputStyle}
        placeholder="Enter Your Password"
        onChangeText={setNumber}
        value={number}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightblue" : "pink" },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "blue" : "white", marginTop: 50 },
          styles.signupButton,
        ]}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>

      {isLoading ? <Loading setIsLoading={setIsLoading} /> : null}
    </View>
  );
};

export default LoginPage;

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
  image: {
    width: 120,
    height: 120,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 20,
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
