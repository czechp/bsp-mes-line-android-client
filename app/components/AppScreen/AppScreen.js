import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import colors from "../../configuration/colors";
import AppSeparator from "../AppSeparator/AppSeparator";
import AppText from "../AppText/AppText";
import systemConfiguration from "../../configuration/systemConfiguration";

const AppScreen = ({ title, children, style = [] }) => {
  return (
    <View style={styles.container}>
      {title && <AppTitle title={title} />}
      <View style={[styles.contentContainer, style]}>{children}</View>
    </View>
  );
};

const AppTitle = ({ title }) => {
  const lineInfo = `${systemConfiguration.lineName.value} - ${systemConfiguration.lineType.value}`;

  return (
    <View style={styles.title}>
      <View style={styles.titleSection}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.titleText}>{lineInfo}</AppText>
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
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  contentContainer: {
    width: "100%",
    flex: 1,
  },
});

export default AppScreen;
