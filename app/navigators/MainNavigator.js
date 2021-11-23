import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "../screens/MenuScreen/MenusScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer
     style={styles.container}>
      <Stack.Navigator
       screenOptions={{
           headerTitle: "Bispol MES"
       }}>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="SettingsLoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default MainNavigator;
