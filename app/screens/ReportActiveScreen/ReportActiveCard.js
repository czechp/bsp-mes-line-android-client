import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/AppText/AppText";
import dateFormatter from "../../utilities/dateFormatter";
import AppRefreshButton from "../../components/AppRefreshButton/AppRefreshButton";
import ReportActiveCloseForm from "./ReportActiveCloseForm";

const ReportActiveCard = ({
  report,
  reloadReport = () => {},
  closeReportOnClick,
}) => {
  return (
    <View style={styles.container}>
      <ReportActiveInfoRow info={{ title: "Id:", value: report.id }} />
      <ReportActiveInfoRow
        info={{ title: "Produkt:", value: report.productName }}
      />
      <ReportActiveInfoRow
        info={{ title: "Wydajność zmianowa:", value: report.targetAmount }}
      />
      <ReportActiveInfoRow
        info={{ title: "Utworzony przez:", value: report.createOperator }}
      />
      <ReportActiveInfoRow
        info={{
          title: "Data utworzenia:",
          value: dateFormatter(report.creationDate),
        }}
      />
      <ReportActiveInfoRow
        info={{ title: "Akutalna produkcja [szt.]:", value: report.amount }}
      />
      <ReportActiveCloseForm closeReportOnClick={closeReportOnClick} />
      <AppRefreshButton style={styles.refreshButton} onPress={reloadReport} />
    </View>
  );
};

const ReportActiveInfoRow = ({ info }) => {
  return (
    <View style={styles.row}>
      <AppText>{info.title}</AppText>
      <AppText style={styles.rowInfoText}>{info.value}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  rowInfoText: {
    fontWeight: "bold",
    textAlign: "right",
  },
  refreshButton: {
    width: "30%",
    marginTop: 200,
  },
});

export default ReportActiveCard;
