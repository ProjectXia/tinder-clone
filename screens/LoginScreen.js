import { View, Text, Button, ImageBackground } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const { promptAsync } = useAuth();
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/tinderbg.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <TouchableOpacity
          className="absolute p-4 bg-white bottom-40 w-52 rounded-2xl"
          style={{ marginHorizontal: "25%" }}
          onPress={() => {
            promptAsync();
          }}
        >
          <Text className="font-semibold text-center">
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
