import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import AppButton from "../../components/AppButton/AppButton";
import AppInfoCard from "../../components/AppInfoCard/AppInfoCard";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppText from "../../components/AppText/AppText";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import systemConfiguration from "../../configuration/systemConfiguration";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";

const RawMaterialAddScreen = ({ navigation }) => {
  const [newMaterial, setNewmaterial] = useState({
    systemId: 1,
    name: "2",
    provider: "3",
    partNr: "4",
    date: "5",
  });

  const [materials, setMaterials] = useState([]);

  const setNewMaterialFromTemplate = ({ systemId, name, provider }) => {
    setNewmaterial({ ...newMaterial, systemId, name, provider });
  };
  const getMaterialsRequest = () => {
    axiosInstance
      .get(`/raw-materials/line/${systemConfiguration.lineId.value}`)
      .then((response) => {
        setMaterials(
          response.data.sort((el1, el2) => el1.name.localeCompare(el2.name))
        );
      })
      .catch((error) => httpErrorHandler(error));
  };

  useEffect(() => {
    const navSub = navigation.addListener("focus", () => {
      setTimeout(() => {
        getMaterialsRequest();
      }, 1000);
    });
    return navSub;
  }, []);

  return (
    <AppScreen title="Dodaj pobrany surowiec">
      <AddForm newMaterial={newMaterial} setNewMaterial={setNewmaterial} />
      <MaterialList
        materials={materials}
        setNewMaterial={setNewMaterialFromTemplate}
      />
    </AppScreen>
  );
};

const AddForm = ({ newMaterial, setNewMaterial }) => {
  const addNewMaterialOnPress = () => {
    //TODO: implement it
  };
  return (
    <View style={styles.addFormContainer}>
      <View style={styles.addFromRow}>
        <AppTextInput
          title="Erp Id:"
          minLength={3}
          inputStyles={{ width: "50%" }}
          value={newMaterial.systemId.toString()}
          onChange={(text) =>
            setNewMaterial({ ...newMaterial, systemId: parseInt(text) })
          }
        />
        <AppTextInput
          title="Nazwa:"
          minLength={3}
          inputStyles={{ width: "50%" }}
          value={newMaterial.name}
          onChange={(text) => setNewMaterial({ ...newMaterial, name: text })}
        />
      </View>
      <View style={styles.addFromRow}>
        <AppTextInput
          title="Dostawca:"
          minLength={3}
          inputStyles={{ width: "50%" }}
          value={newMaterial.provider}
          onChange={(text) =>
            setNewMaterial({ ...newMaterial, provider: text })
          }
        />
        <AppTextInput
          title="Nr.partii:"
          inputStyles={{ width: "50%" }}
          value={newMaterial.partNr}
          onChange={(text) => setNewMaterial({ ...newMaterial, partNr: text })}
        />
      </View>
      <AppTextInput
        title="Data:"
        inputStyles={{ width: "50%" }}
        value={newMaterial.date}
        onChange={(text) => setNewMaterial({ ...newMaterial, date: text })}
      />
      <AppButton title="Dodaj" onPress={addNewMaterialOnPress} />
    </View>
  );
};

const MaterialList = ({ materials, setNewMaterial }) => {
  return (
    <View style={styles.materialListContainer}>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MaterialRow material={item} setNewMaterial={setNewMaterial} />
        )}
      />
    </View>
  );
};

const MaterialRow = ({ material, setNewMaterial }) => {
  return (
    <TouchableOpacity onPress={() => setNewMaterial(material)}>
      <AppInfoCard
        data={[
          { title: "Erp ID:", value: material.systemId },
          { title: "Nazwa:", value: material.name },
          { title: "Dostawca:", value: material.provider },
        ]}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  addFormContainer: {
    flex: 0.5,
    width: "100%",
  },
  addFromRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  materialListContainer: {
    width: "100%",
    flex: 0.5,
  },
  materialListRow: {},
});

export default RawMaterialAddScreen;
