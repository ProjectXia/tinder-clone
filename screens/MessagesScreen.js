import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const MessagesScreen = () => {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {};
  return (
    <SafeAreaView className="flex-1">
      <Header callEnabled={true} title={"Zia Ul Mustafa"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
            <Text>TEST</Text>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View className="flex-row items-center justify-between px-5 py-2 bg-white border-t border-zinc-200">
        <TextInput
          placeholder="Send Message..."
          className="h-10 text-lg"
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button title="Send" onPress={sendMessage} color={"#FF5864"} />
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;
