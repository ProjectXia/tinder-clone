import { View, Text, TouchableOpacity, Image, Switch } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import Swiper from "react-native-deck-swiper";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const DUMMY_DATA = [
  {
    firstname: "Sonny",
    lastname: "Sangha",
    job: "Software Developer",
    photoUrl:
      "https://images.unsplash.com/photo-1552788960-65fcafe071a5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
    age: "27",
    id: 123,
  },
  {
    firstname: "Elon",
    lastname: "Musk",
    job: "Software Developer",
    photoUrl:
      "https://img.freepik.com/premium-photo/one-year-old-caucasian-girl-yellow-clothes-is-upset-crying-studio-photo-year-child_308589-2255.jpg",
    age: "40",
    id: 456,
  },
  {
    firstname: "Edan",
    lastname: "Phillpe",
    job: "Software Developer",
    photoUrl:
      "https://www.momjunction.com/wp-content/uploads/2014/07/250-Latest-Modern-And-Unique-Hindu-Baby-Boy-Names.jpg",
    age: "32",
    id: 789,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const swapRef = useRef();

  // useLayoutEffect(
  //   () =>
  //     onSnapshot(doc(db, "users", user.uid), (snapshot) => {
  //       if (!snapshot.exists()) {
  //         navigation.navigate("ModelScreen");
  //       }
  //     }),
  //   []
  // );

  // useEffect(() => {
  //   let unsub;
  //   const fetchCards = async () => {
  //     unsub = onSnapshot(collection(db, "users"), (snapshot) => {
  //       setProfiles(
  //         snapshot.docs
  //           .filter((doc) => doc.id !== user.uid)
  //           .map((doc) => ({
  //             id: doc.id,
  //             ...doc.data(),
  //           }))
  //       );
  //     });
  //   };
  //   fetchCards();
  //   return unsub;
  // }, []);

  const swipeLeft = async () => {};
  const swipeRight = async (cardIndex) => {
    navigation.navigate("MatchScreen");
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      {/* <View>
        <Switch />
      </View> */}
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={40} color={"#FF5864"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ModelScreen");
          }}
        >
          <Image
            source={require("../assets/icontinder.png")}
            className="h-16 w-14"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChatScreen");
          }}
        >
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={30}
            color={"#FF5864"}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swapRef}
          containerStyle={{ backgroundColor: "transparent" }}
          backgroundColor={"#4FD0E9"}
          cards={DUMMY_DATA}
          cardIndex={0}
          stackSize={5}
          verticalSwipe={false}
          animateCardOpacity
          onSwipedLeft={(cardIndex) => {
            console.log("Swap Left");
            swipeLeft(cardIndex);
          }}
          onSwipedRight={(cardIndex) => {
            console.log("Swap Right");
            swipeRight(cardIndex);
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: { label: { textAlign: "right", color: "red" } },
            },
            right: {
              title: "WAOO",
              style: { label: { color: "green" } },
            },
          }}
          renderCard={(card) =>
            card ? (
              <View
                key={card.id}
                className="relative bg-white h-3/4 rounded-xl"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                }}
              >
                <Image
                  className="absolute top-0 w-full h-full rounded-xl"
                  source={{ uri: card.photoUrl }}
                />
                <View className="absolute bottom-0 flex-row items-center justify-between w-full px-6 py-2 bg-white rounded-b-xl">
                  <View>
                    <Text className="text-xl font-bold">
                      {card.firstname} {card.lastname}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text className="text-2xl font-bold">{card.age}</Text>
                </View>
              </View>
            ) : (
              <View
                className="relative items-center justify-center bg-white h-3/4 rounded-xl"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                }}
              >
                <Text className="pb-5 font-bold">No more Profiles</Text>
                <Image
                  className="w-full h-20"
                  resizeMode="contain"
                  width={100}
                  height={100}
                  source={{ uri: "https://links.papareact.com/6gb" }}
                />
              </View>
            )
          }
        />
      </View>
      <View className="flex-row items-center mb-10 justify-evenly">
        <TouchableOpacity
          className="p-4 bg-red-200 rounded-full"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
          onPress={() => {
            swapRef.current.swipeLeft();
          }}
        >
          <Entypo name="cross" size={24} color={"red"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="p-4 bg-green-200 rounded-full"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
          onPress={() => {
            swapRef.current.swipeRight();
          }}
        >
          <AntDesign name="heart" size={24} color={"green"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
