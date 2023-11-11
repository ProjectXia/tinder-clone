import { View, Text } from "react-native";
import React from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between p-2">
      <View className="flex flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <Ionicons name="chevron-back-outline" size={34} color={"#FF5864"} />
        </TouchableOpacity>
        <Text className="flex-1 pl-2 text-2xl font-bold">{title}</Text>
        {callEnabled && (
          <TouchableOpacity className="px-3 py-2 mr-4 bg-red-200 rounded-full">
            <Foundation name="telephone" size={30} color={"red"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
