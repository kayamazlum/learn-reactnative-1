import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomTextInput, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          style={styles.image}
          source={require("../../assets/images/signupIcon.png")}
        />
        <Text style={styles.signUp}>SignupPage</Text>
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          onChangeText={setName}
          value={name}
          placeholder="Enter Your Name"
        />
        <CustomTextInput
          title="Email"
          isSecureText={false}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          onChangeText={setPassword}
          value={password}
          placeholder="Create Your Password"
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          title="Sign Up"
          width="80%"
          buttonColor="lightblue"
          pressedButtonColor="lightgray"
          onPress={() => handleRegister()}
        />

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0b0d5",
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  title: {
    flex: 1,
    paddingTop: 30,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 2,
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  signUpOptions: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 60,
  },
  image: {
    width: 70,
    height: 70,
  },
});
