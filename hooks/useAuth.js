import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({
  // initial state...
});

// const config = {
//   androidClientId:
//     "841034415535-qgve2d3bl9n7t74hr753qhukuhvdq9p8.apps.googleusercontent.com",
//   iosClientId:
//     "841034415535-fun3jpsrp8dsvgd450tvf2ldqlq8399c.apps.googleusercontent.com",
//   scopes: ["profile", "email"],
//   permissions: ["public_profile", "email", "gender", "location"],
// };

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "841034415535-ornds11vg31m8e6vgthlv0p308k5pdk9.apps.googleusercontent.com",
    iosClientId:
      "841034415535-fun3jpsrp8dsvgd450tvf2ldqlq8399c.apps.googleusercontent.com",
    webClientId:
      "913883006998-764a5h2fuo2ripl6dmdjfo2mp6tu0d5u.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        console.log("user not auth");
      }
      setLoadingInitial(false);
    });
    return () => unsub();
  }, []);

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user: user, error, loading, promptAsync, logout }}
    >
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
