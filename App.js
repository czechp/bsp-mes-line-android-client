import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "./app/components/AppScreen/AppScreen";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen/LoginScreen";

export default function App() {
  const [text, setText] = useState("123");
  
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
