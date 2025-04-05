import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  width,
  onPress,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width: width,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
