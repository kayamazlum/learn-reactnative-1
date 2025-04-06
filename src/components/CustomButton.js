import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  flex,
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
          flex: flex,
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
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
