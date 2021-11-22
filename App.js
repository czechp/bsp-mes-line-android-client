import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";

export default function App() {
  const [text, setText] = useState("123");
  
  return (
    <View style={styles.container}>
      <AppTextInput
      title="Test input"
      value={text}
      onChangeText={setText}
      maxLength={5}
      minLength={3}
       />
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
