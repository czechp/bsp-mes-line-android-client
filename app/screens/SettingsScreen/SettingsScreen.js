import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import AppInfoCard from "../../components/AppInfoCard/AppInfoCard";
import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import showToast from "../../utilities/showToast";
import SettingsSelectForm from "./SettingsSelectForm";

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

  const saveConfigurationData = async (line) => {
    setLineId(line.id);
    setLineName(line.name);
    setLineType(line.productionType);

    await systemConfiguration.lineId.saveData(line.id.toString());
    await systemConfiguration.lineName.saveData(line.name);
    await systemConfiguration.lineType.saveData(line.productionType);
    systemConfiguration.readAll();
  };

  const selectLine = (lineName) => {
    const line = lines.find((line) => line.name === lineName);
    if (line) saveConfigurationData(line);
    else showToast(`Linia ${lineName} nie istnieje`);
  };

  const getLines = () => {
    axiosInstance
      .get("/lines")
      .then((response) => {
        setLines(response.data);
      })
      .catch((error) => {
        httpErrorHandler(error);
      });
  };

  useEffect(async () => {
    //TODO remove it after developing
    setTimeout(() => {
      readConfigurationData();
    }, 300);
    getLines();
  }, []);

  return (
    <AppScreen title="Ustawienia systemu">
      <AppInfoCard title="Konfiguracja systemu" data={buildDataForFlatList()} />
      <SettingsSelectForm
        value={lineName}
        values={lines.map((line) => line.name)}
        onAssign={selectLine}
      />
    </AppScreen>
  );
};

export default SettingsScreen;
