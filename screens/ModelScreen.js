import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { setDoc } from "@firebase/firestore";
import { db } from "../firebase";

const ModelScreen = () => {
  const [image, setImage] = useState();
  const [job, setJob] = useState();
  const [age, setAge] = useState();

  const navigation = useNavigation();

  const incompleteForm = !image || !job || !age;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fF5864",
      },
      headerTitleStyle: { color: "white" },
      headerTitle: "Update your profile",
    });
  }, []);

  // const updateUserProfile = () => {
  //   setDoc(doc(db, "users", user.uid), {
  //     id: user.uid,
  //     displayName: user.displayName,
  //     photoURL: image,
  //     job: job,
  //     age: age,
  //     timestamp: serverTimestamp(),
  //   })
  //     .then(() => {
  //       navigation.native("HomeScreen");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <View className="items-center flex-1 pt-1">
      <Image
        source={{ uri: "https://links.papareact.com/2pf" }}
        resizeMode="contain"
        className="w-full h-20 "
      />
      <Text className="p-2 text-xl font-bold text-zinc-500">
        Welcome Zia ul Mustafa
      </Text>
      <Text className="p-4 font-bold text-center text-red-400">
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter a Profile Pic URL"
      />
      <Text className="p-4 font-bold text-center text-red-400">
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setJob(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter your occupation"
      />
      <Text className="p-4 font-bold text-center text-red-400">
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter your age"
        maxLength={2}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        disabled={incompleteForm}
        className={`absolute w-64 p-3 ${
          incompleteForm ? "bg-zinc-400" : "bg-red-400"
        } rounded-xl bottom-10`}
      >
        <Text className="text-xl text-center text-white">Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelScreen;
