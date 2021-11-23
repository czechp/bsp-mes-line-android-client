import React from "react";
import AppPicker from "../../components/AppPicker/AppPicker";
import AppText from "../../components/AppText/AppText";

const SettingsSelectForm = ({ value, values, onAssign }) => {
  return (
    <>
      <AppPicker
        title="Wybierz linie:"
        value={value}
        values={values}
        onAssign={onAssign}
      />
    </>
  );
};

export default SettingsSelectForm;
