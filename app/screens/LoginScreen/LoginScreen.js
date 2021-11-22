import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppButton from "../../components/AppButton/AppButton";

import AppForm from "../../components/AppForm/AppForm";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import colors from "../../configuration/colors";

const LoginScreen = ({}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const minDataLength = 3;

  const dataValidated = login.length >= minDataLength && password.length >= minDataLength;
  const loginOnPress = () => {
    //TODO implement it
    console.log(`Logged with data: ${login} ${password}`);
  };

  return (
    <AppScreen title="Ustawienia" style={styles.container}>
      <AppForm>
        <AppTextInput
          title="Login:"
          placeholder="Wpisz login"
          autocorrect={false}
          autoFocus
          value={login}
          onChangeText={(text) => setLogin(text)}
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
