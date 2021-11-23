import React, { useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import AppButton from "../../components/AppButton/AppButton";

import AppForm from "../../components/AppForm/AppForm";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import showToast from "../../utilities/showToast";

const LoginScreen = ({ navigation }) => {
  //TODO Remove it after completing settings
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const minDataLength = 3;

  const dataValidated =
    username.length >= minDataLength && password.length >= minDataLength;

  const checkUserRole = (role) => {
      if(role === "ADMIN")
        navigation.navigate("SettingsScreen");
      else
        showToast("Masz zbyt niskie uprawnienia do konfiguracji tego urządzenia.");

  };

  const loginRequest = () => {
    axiosInstance
      .post("/appusers/login", { username, password })
      .then((response) => {
        checkUserRole(response.data.appUserRole);
      })
      .catch((error) => {
        httpErrorHandler(error);
      });
  };

  const loginOnPress = () => {
    if (dataValidated) {
      loginRequest();
    } else {
      ToastAndroid.show("Sprawdź poprawność danych");
    }
  };

  return (
    <AppScreen title="Logowanie" style={styles.container}>
      <AppForm>
        <AppTextInput
          title="Login:"
          placeholder="Wpisz login"
          autocorrect={false}
          autoFocus
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          minLength={minDataLength}
        />
        <AppTextInput
          title="Hasło:"
          placeholder="Wpisz hasło"
          autocorrect={false}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          minLength={minDataLength}
        />
        <AppButton
          disabled={true}
          title="Zaloguj"
          onPress={loginOnPress}
          color="primary"
          disabled={!dataValidated}
        />
      </AppForm>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
