import React, { PureComponent } from "react";
import { useEffect, useState } from "react/cjs/react.development";

import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import showToast from "../../utilities/showToast";
import ReportActiveCard from "./ReportActiveCard";

const ReportActiveScreen = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activeReportExists, setActiveReportExsits] = useState(false);
  const [activeReport, setActiveReport] = useState({});

  const getActiveReportRequest = () => {
    setDataLoaded(false);
    axiosInstance
      .get(`/reports/status/active/${systemConfiguration.lineId.value}`)
      .then((response) => {
        setActiveReport(response.data);
        setActiveReportExsits(true);
      })
      .catch((error) => {
        if (error.response.status === 404) setActiveReportExsits(false);
        else httpErrorHandler(error);
      })
      .finally(() => setDataLoaded(true));
  };

  const closeReportRequest = (trashAmount) => {
    axiosInstance
      .patch(
        `/reports/status/close/${systemConfiguration.lineId.value}`,
        {},
        {
          params: {
            trashAmount: trashAmount,
          },
        }
      )
      .then((repsone) => {
        setActiveReportExsits(false);
        getActiveReportRequest();
        showToast("Raport zamkniety z powodzeniem.");
      })
      .catch((error) => {
        httpErrorHandler(error);
      })
      .finally(() => setDataLoaded(true));
  };

  useEffect(() => {
    const navSubscription = navigation.addListener("focus", () => {
      getActiveReportRequest();
    });

    return navSubscription;
  }, []);
  return (
    <AppScreen title="Raport" dataLoaded={dataLoaded}>
      {activeReportExists && (
        <ReportActiveCard
          report={activeReport}
          reloadReport={getActiveReportRequest}
          closeReportOnClick={closeReportRequest}
        />
      )}
    </AppScreen>
  );
};

export default ReportActiveScreen;
