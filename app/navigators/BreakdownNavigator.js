import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AppScreen from "../components/AppScreen/AppScreen";
import BreakdownActiveScreen from "../screens/BreakdownScreen/BreakdownActiveScreen";

const BreakdownTabNavigator = createMaterialTopTabNavigator();

const BreakdownNavigator = ({ navigation }) => {
  return (
    <AppScreen>
      <BreakdownTabNavigator.Navigator>
        <BreakdownTabNavigator.Screen
         name="BreakdownActiveScreen" 
         component={BreakdownActiveScreen}
         options={{
             title:"Aktualna awaria"
         }}
        />
      </BreakdownTabNavigator.Navigator>
    </AppScreen>
  );
};

export default BreakdownNavigator;