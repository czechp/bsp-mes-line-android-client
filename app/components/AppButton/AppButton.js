import React from "react";
import { StyleSheet, ToastAndroid, TouchableOpacity } from "react-native";

import colors from "../../configuration/colors";
import AppText from "../AppText/AppText";

const AppButton = ({
  title,
  onPress,
  color = "secondary",
  disabled = false,
}) => {
  const mainColor = disabled ? colors.secondary : colors[color];
  const onPressFunction = disabled
    ? () => {
        ToastAndroid.show("Sprawdź poprawność danych", ToastAndroid.LONG);
      }
    : onPress;

  return (
    <TouchableOpacity
      style={{ ...styles.button, borderColor: mainColor }}
      onPress={onPressFunction}
    >
      <AppText style={{ color: mainColor }}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
});

export default AppButton;
