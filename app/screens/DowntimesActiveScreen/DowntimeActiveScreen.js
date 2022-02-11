//embedded components section
import React, { useEffect, useState } from "react";

//custom components section
import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import DowntimeNotExists from "./DowntimeNotExists";
import showToast from "../../utilities/showToast";

const DownTimeActiveScreen = ({ navigation }) => {
  const [activeDowntime, setActiveDowntime] = useState();
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

  const createNewDowntimeRequest = (newDownTime) => {
    if (newDownTime.length > 0) {
      axiosInstance
        .post(`/downtimes-executed/line/${systemConfiguration.lineId.value}`, {
          content: newDownTime,
        })
        .then((response) => {
          showToast("Stworzono nowy postój produkcyjny.");
        })
        .catch((error) => {
          httpErrorHandler(error);
        });
    } else showToast("Zdefiniowany przestój produkcyjne jest za krótki.");
  };

  const getActiveDowntime = () => {
    axiosInstance
      .get(`/downtimes-executed/line/${systemConfiguration.lineId.value}`)
      .then((response) => {
        setActiveDowntime(response.data);
      })
      .catch((error) => {
        if (error.response.status !== 404) httpErrorHandler(error);
      });
  };

  useEffect(() => {
    setDataLoaded(false);
    //TODO: "move it into navigation.listener and remove timeout"
    setTimeout(() => {
      getDowntimeRequest();
      getActiveDowntime();
    }, 2000);

    return navigation.addListener("focus", () => {});
  }, []);

  return (
    <AppScreen title="Przestoje produkcyjne" dataLoaded={dataLoaded}>
      {!activeDowntime && (
        <DowntimeNotExists
          downtimes={downtimes}
          saveDowntime={createNewDowntimeRequest}
        />
      )}
    </AppScreen>
  );
};

export default DownTimeActiveScreen;
