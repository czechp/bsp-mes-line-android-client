import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import colors from "../../configuration/colors";
import AppSeparator from "../AppSeparator.js/AppSeparator";
import AppText from "../AppText/AppText";

const AppScreen = ({ title, children, style = [] }) => {
  return (
    <View style={styles.container}>
      <AppTitle title={title} />
      <View style={[styles.contentContainer, style]}>{children}</View>
    </View>
  );
};

const AppTitle = ({ title }) => {
  //TODO: read line name
  const lineName = "Bispol MES L-00";

  return (
    <View style={styles.title}>
      <View style={styles.titleSection}>
        <AppText>{title}</AppText>
        <AppText>{lineName}</AppText>
      </View>
      <AppSeparator style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
  title: {
    alignItems: "center",
    marginTop: 30,
  },
  separator: {
    marginVertical: 10,
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  contentContainer: {
    width: "100%",
    flex: 1

  },
});

export default AppScreen;
