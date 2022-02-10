import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ReportActiveScreen from "../screens/ReportActiveScreen/ReportActiveScreen";
import AppScreen from "../components/AppScreen/AppScreen";
import DownTimeActiveScreen from "../screens/DowntimesActiveScreen/DowntimeActiveScreen";

const DownTimeNavigator = createMaterialTopTabNavigator();

const DowntimeNavigator = ({ navigation }) => {
  return (
    <AppScreen>
      <DownTimeNavigator.Navigator>
        <DownTimeNavigator.Screen
          name="DowntimeActiveScreen"
          component={DownTimeActiveScreen}
          options={{
            title: "Aktualny przestój",
          }}
        />

      </DownTimeNavigator.Navigator>
    </AppScreen>
  );
};

export default DowntimeNavigator;
