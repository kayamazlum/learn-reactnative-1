import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()]);
    });
  };

  // DELETE DATA FROM FIREBASE
  const deleteData = async () => {
    await deleteDoc(doc(db, "reactNativeLesson", "hXNe0RE6DSM2rAcpc5HN"));
  };

  // UPDATE DATA FROM FIREBASE
  const updateData = async () => {
    try {
      const lessonData = doc(db, "reactNativeLesson", "EqFJEJsd43z1esFENgKY");
      await updateDoc(lessonData, {
        lesson: 102,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>

      <Text>{data.title}</Text>
      <Text>{data.content}</Text>
      <Text>{data.lesson}</Text>

      <CustomButton
        title={"Save"}
        width={"40%"}
        buttonColor={"pink"}
        pressedButtonColor={"gray"}
        onPress={sendData}
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
