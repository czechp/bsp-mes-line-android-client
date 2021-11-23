import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./app/navigators/MainNavigator";
import LoginScreen from "./app/screens/LoginScreen/LoginScreen";


export default function App() {
  const [text, setText] = useState("Init value");
  
  return (
    <MainNavigator />
    // <LoginScreen />
  );
};