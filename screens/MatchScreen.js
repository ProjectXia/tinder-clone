import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MatchScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="h-full pt-20 bg-red-500" style={{ opacity: 0.89 }}>
      <View className="justify-center px-10 pt-20">
        <Image
          className="w-full h-20 rounded-xl"
          source={{ uri: "https://links.papareact.com/mg9" }}
        />
      </View>

      <Text className="mt-5 text-center text-white">
        You and ............ have liked each other.
      </Text>
      <View className="flex-row mt-5 justify-evenly">
        <Image
          className="w-32 h-32 rounded-full"
          source={{
            uri: "https://img.freepik.com/premium-photo/one-year-old-caucasian-girl-yellow-clothes-is-upset-crying-studio-photo-year-child_308589-2255.jpg",
          }}
        />
        <Image
          className="w-32 h-32 rounded-full"
          source={{
            uri: "https://www.momjunction.com/wp-content/uploads/2014/07/250-Latest-Modern-And-Unique-Hindu-Baby-Boy-Names.jpg",
          }}
        />
      </View>
      <TouchableOpacity
        className="px-10 py-8 m-5 mt-20 bg-white rounded-full"
        onPress={() => {
          navigation.goBack();
          navigation.navigate("ChatScreen");
        }}
      >
        <Text className="text-center">Send a Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
