import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./app/components/AppPicker/AppPicker";


import AppScreen from "./app/components/AppScreen/AppScreen";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen/LoginScreen";

export default function App() {
  const [text, setText] = useState("Init value");
  
  return (

    <AppScreen title="Test screen">
      <AppPicker title="Select value" value={text} values={["First", "Second", "Third", "Fourth"]} onAssign={setText} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 20
  },
});
