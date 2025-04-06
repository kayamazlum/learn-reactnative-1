import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Loading, CustomTextInput, CustomButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, login, autoLogin } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // userSlice içerisindeki verilerin okunması
  const { isLoading, error } = useSelector((state) => state.user);

  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Login</Text>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        onChangeText={(text) => setEmail(text.toLowerCase())}
        value={email}
        placeholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Enter Your Password"
      />
      <Text>{error}</Text>
      <CustomButton
        title="Login"
        width="80%"
        onPress={() => dispatch(login({ email, password }))}
        buttonColor="lightblue"
        pressedButtonColor="lightgray"
      />
      <CustomButton
        title="Sign Up"
        width="30%"
        onPress={() => navigation.navigate("Signup")}
        buttonColor="pink"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading setIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
