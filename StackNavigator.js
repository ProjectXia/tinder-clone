import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import ModelScreen from "./screens/ModelScreen";
import useAuth from "./hooks/useAuth";
import MatchScreen from "./screens/MatchScreen";
import MessagesScreen from "./screens/MessagesScreen";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MessagesScreen"
              component={MessagesScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
            <Stack.Screen name="ModelScreen" component={ModelScreen} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              headerShown: false,
            }}
          >
            <Stack.Screen name="MatchScreen" component={MatchScreen} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
