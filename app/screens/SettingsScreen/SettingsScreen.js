import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AppInfoCard from "../../components/AppInfoCard/AppInfoCard";
import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";

const SettingsScreen = () => {
  const [lineId, setLineId] = useState(0);
  const [lineName, setLineName] = useState("");
  const [lineType, setLineType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [lines, setLines] = useState([]);

  const buildDataForFlatList = () => {
    function DataRow(title, value) {
      this.title = title;
      this.value = value;
    }

    return [
      new DataRow("Id:", lineId),
      new DataRow("Nazwa linii:", lineName),
      new DataRow("Dział:", lineType),
      new DataRow("Login:", username),
      new DataRow("Hasło:", password),
    ];
  };

  const readConfigurationData = () => {
    setLineId(systemConfiguration.lineId.value);
    setLineName(systemConfiguration.lineName.value);
    setLineType(systemConfiguration.lineType.value);
    setUsername(systemConfiguration.username.value);
    setPassword(systemConfiguration.password.value);
  };

  const getLines = () => {
      axiosInstance.get("")
  };

  useEffect(async () => {
    //TODO remove it after developing
    setTimeout(() => {
      readConfigurationData();
    }, 100);
  }, []);

  return (
    <AppScreen title="Ustawienia systemu">
      <AppInfoCard title="Konfiguracja systemu" data={buildDataForFlatList()} />
    </AppScreen>
  );
};

export default SettingsScreen;
