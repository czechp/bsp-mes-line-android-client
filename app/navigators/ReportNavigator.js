import React, { PureComponent } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ReportActiveScreen from "../screens/ReportActiveScreen/ReportActiveScreen";
import AppScreen from "../components/AppScreen/AppScreen";
import ReportsClosedScreen from "../screens/ReportsClosed/ReportsClosedScreen";

const ReportTabNavigator = createMaterialTopTabNavigator();

const ReportNavigator = ({ navigation }) => {
  return (
    <AppScreen>
      <ReportTabNavigator.Navigator>
        <ReportTabNavigator.Screen
          name="ReportsClosedScreen"
          component={ReportsClosedScreen}
          options={{
            title: "Zapisane raporty",
          }}
        />
        <ReportTabNavigator.Screen
          name="ReportActiveScreen"
          component={ReportActiveScreen}
          options={{
            title: "Aktualny raport",
          }}
        />
      </ReportTabNavigator.Navigator>
    </AppScreen>
  );
};

export default ReportNavigator;
