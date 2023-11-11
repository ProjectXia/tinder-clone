import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      }}
      className="flex-row items-center px-5 py-3 mx-3 my-1 bg-white rounded-lg"
      onPress={() => {
        navigation.navigate("MessagesScreen");
      }}
    >
      <Image
        className="w-16 h-16 mr-4 rounded-full"
        source={{
          uri: "https://www.momjunction.com/wp-content/uploads/2014/07/250-Latest-Modern-And-Unique-Hindu-Baby-Boy-Names.jpg",
        }}
      />
      <View>
        <Text className="text-lg font-semibold">Zia Ul Mustafa</Text>
        <Text>Say Hi!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
