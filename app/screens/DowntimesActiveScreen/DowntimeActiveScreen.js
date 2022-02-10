//embedded components section
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

//custom components section
import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import DowntimeNotExists from "./DowntimeNotExists";

const DownTimeActiveScreen = ({ navigation }) => {
  const [downtimes, setDowntimes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const getDowntimeRequest = () => {
    axiosInstance
      .get(`/downtimes/line/${systemConfiguration.lineId.value}`)
      .then((response) => {
        setDowntimes(response.data);
      })
      .catch((error) => {
        httpErrorHandler(error);
      })
      .finally(() => setDataLoaded(true));
  };

  useEffect(() => {
    setDataLoaded(false);
    setTimeout(() => {
      getDowntimeRequest();
    }, 2000);

    return navigation.addListener("focus", () => {});
  }, []);

  return (
    <AppScreen title="Przestoje produkcyjne" dataLoaded={dataLoaded}>
      <DowntimeNotExists downtimes={downtimes} />
    </AppScreen>
  );
};

export default DownTimeActiveScreen;
