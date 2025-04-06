import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import Animated, { FlipInEasyX, PinwheelIn } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { saveData, setUserInput } from "../redux/dataSlice";

const HomePage = () => {
  const { data, userInput } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(userInput);

  // DELETE DATA FROM FIREBASE
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log("Delete Successfully");
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE DATA FROM FIREBASE
  // const updateData = async (value) => {
  //   try {
  //     const lessonData = doc(db, "reactNativeLesson", value);
  //     await updateDoc(lessonData, {
  //       content: updateTheData,
  //     });
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // LOGOUT İŞLEMLERİ
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleTextInput = (text) => {
    dispatch(setUserInput(text));
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={FlipInEasyX.delay(100 * (index + 1))}
        style={styles.flatListContainer}
      >
        <Pressable
          onPress={() => deleteData(item.id)}
          style={styles.iconContainer}
        >
          <AntDesign name="checkcircle" size={24} color="black" />
          <FontAwesome6 name="circle" size={24} color="black" />
        </Pressable>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
      <Animated.FlatList
        entering={PinwheelIn}
        style={styles.flatLst}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.userInputContainer}>
        <TextInput
          placeholder="Add To Do"
          onChangeText={handleTextInput}
          value={userInput}
          style={styles.textInput}
        />
        <CustomButton
          title={"Save"}
          flex={1}
          buttonColor={"lightblue"}
          pressedButtonColor={"gray"}
          onPress={() => dispatch(saveData(userInput))}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  flatLst: {
    width: "90%",
    padding: 10,
  },
  flatListContainer: {
    marginVertical: 5,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 5,
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  iconContainer: {
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
  },
  userInputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    flex: 3,
    marginRight: 10,
    padding: 10,
    borderColor: "gray",
    paddingVertical: 5,
    height: 40,
    textAlign: "center",
  },
});
