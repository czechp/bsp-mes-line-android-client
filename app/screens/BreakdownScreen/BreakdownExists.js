import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../../components/AppButton/AppButton";
import AppForm from "../../components/AppForm/AppForm";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import showToast from "../../utilities/showToast";
import BreakdownCard from "./BreakdownCard";

const BreakdownExists = ({ breakdown, maintenanceArrived }) => {
  return (
    <View style={styles.container}>
      <BreakdownCard breakdown={breakdown} />
      {breakdown.breakdownStatus === "NEW" && (
        <BreakdownExistsStartForm maintenanceArrived={maintenanceArrived} />
      )}
      {/* TODO: implement closing breakdown */}
    </View>
  );
};

const BreakdownExistsStartForm = ({ maintenanceArrived }) => {
  const [umupNumber, setUmupNumber] = useState("M");
  const confirmStartingOnClick = () => {
    if (umupNumber.length >= 3) {
      maintenanceArrived(umupNumber);
    } else showToast("Numer umup musi mieć przynajmniej 3 znaki!");
  };
  return (
    <AppForm style={styles.startForm}>
      <AppTextInput
        title="Wpisz nummer UMUP:"
        minLength={3}
        value={umupNumber}
        onChangeText={(text) => {
          setUmupNumber(text);
        }}
      />
      <AppButton
        title="Rozpocznij usuwanie awarii"
        onPress={() => confirmStartingOnClick()}
      />
    </AppForm>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  startForm: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
});

export default BreakdownExists;
