import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
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

const HomePage = () => {
  const [data, setData] = useState([]);
  const [updateTheData, setUpdateTheData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  // SEND DATA FOR FIREBASE
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //GET DATA FROM FIREBASE
  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

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
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);
      await updateDoc(lessonData, {
        content: updateTheData,
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter your data"
        onChangeText={setUpdateTheData}
        value={updateTheData}
        style={{
          borderWidth: 0.5,
          paddingVertical: 5,
          width: "80%",
          marginBottom: 10,
        }}
      />
      {data.map((value, index) => {
        return (
          <Pressable key={index} onPress={() => updateData(value.id)}>
            <Text>{index}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </Pressable>
        );
      })}

      <CustomButton
        title={"Save"}
        width={"40%"}
        buttonColor={"pink"}
        pressedButtonColor={"gray"}
        onPress={() => {
          sendData(), getData();
        }}
      />
      <CustomButton
        title={"Get Data"}
        width={"40%"}
        buttonColor={"lightgray"}
        pressedButtonColor={"gray"}
        onPress={getData}
      />
      <CustomButton
        title={"Delete Data"}
        width={"40%"}
        buttonColor={"tomato"}
        pressedButtonColor={"gray"}
        onPress={deleteData}
      />
      <CustomButton
        title={"Update Data"}
        width={"40%"}
        buttonColor={"lightblue"}
        pressedButtonColor={"gray"}
        onPress={updateData}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
