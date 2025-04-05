import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureText,
  onChangeText,
  value,
  placeholder,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        style={styles.textInputStyle}
        secureTextEntry={isSecureText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
  },
});
