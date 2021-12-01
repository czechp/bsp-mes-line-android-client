import React, { PureComponent, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppScreen from "../../components/AppScreen/AppScreen";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import AppText from "../../components/AppText/AppText";
import { fontSmallerStyles } from "../../configuration/styles";
import dateFormatter from "../../utilities/dateFormatter";
import AppSeparator from "../../components/AppSeparator/AppSeparator";

const ReportsClosedScreen = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [reports, setReports] = useState([]);

  const getReportsRequest = () => {
    setDataLoaded(false);
    axiosInstance
      .get(`/reports/line/${systemConfiguration.lineId.value}`)
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        httpErrorHandler(error);
      })
      .finally(() => {
        setDataLoaded(true);
      });
  };

  useEffect(() => {
    //TODO remove it
    const navSub = navigation.addListener("focus", () => {
      setTimeout(() => {
        getReportsRequest();
      }, 500);

      return navSub;
    });
  }, []);

  return (
    <AppScreen title="Zapisane raporty" dataLoaded={dataLoaded}>
      <FlatList
        data={reports}
        keyExtractor={() => {
          (item) => item.id.toString();
        }}
        renderItem={({item})=><ReportsClosedCard report={item} />}
      />
    </AppScreen>
  );
};

const ReportsClosedCard = ({ report }) => {
  return (
    <View style={styles.card}>
      <AppText style={styles.idText}>Id:{report.id}</AppText>
      <ReportClosedRow
        data={{ title: "Produkt:", value: report.productName }}
      />
      <ReportClosedRow
        data={{ title: "Utworzony przez:", value: report.createOperator }}
      />
      <ReportClosedRow
        data={{
          title: "Data utworzenia:",
          value: dateFormatter(report.creationDate),
        }}
      />
      <ReportClosedRow
        data={{ title: "Zamknięty przez:", value: report.finishOperator }}
      />

      <ReportClosedRow
        data={{
          title: "Data zamknięcia:",
          value: dateFormatter(report.finishDate),
        }}
      />
      <ReportClosedRow
        data={{
          title: "Oczekiwana wydajność:",
          value: report.targetAmount,
        }}
      />

      <ReportClosedRow
        data={{
          title: "Odpad:",
          value: report.trashAmount,
        }}
      />

      <ReportClosedRow
        data={{
          title: "Rzeczywista wydajność:",
          value: report.amount,
        }}
      />
      <AppSeparator />
    </View>
  );
};

const ReportClosedRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <AppText style={styles.titleText}>{data.title}</AppText>
      <AppText style={styles.valueText}>{data.value}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    alignItems: "center",
  },
  idText: {
    ...fontSmallerStyles,
    textAlign: "left",
  },
  valueText: {
    textAlign: "right",
    ...fontSmallerStyles,
  },
  titleText: {
    ...fontSmallerStyles,
  },
  
});

export default ReportsClosedScreen;
