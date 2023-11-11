import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [matches, setMatches] = useState([{ id: 123 }]);
  const { user } = useAuth();

  //   useEffect(() =>
  //     onSnapshot(
  //       query(
  //         collection(db, "matches"),
  //         where("usersMatched", "array-contains", user.uid)
  //       ),
  //       (snapshot) =>
  //         setMatches(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             ...doc.data(),
  //           }))
  //         )
  //     )
  //   ,[user]);
  return matches.length > 0 ? (
    <View>
      <ChatRow />
    </View>
  ) : (
    <View className="p-5">
      <Text className="text-lg text-center text-zinc-500">
        No matches at the moment
      </Text>
      <Image
        className="w-full h-10"
        resizeMode="contain"
        width={50}
        height={50}
        source={{ uri: "https://links.papareact.com/6gb" }}
      />
    </View>
  );
};

export default ChatList;
