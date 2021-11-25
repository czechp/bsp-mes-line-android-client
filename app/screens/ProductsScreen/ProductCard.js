import React, { PureComponent } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppSeparator from "../../components/AppSeparator/AppSeparator";

import AppText from "../../components/AppText/AppText";

const ProductCard = ({ productInfo }) => {
  return (
    <View style={styles.container}>
      <AppText
        style={styles.sectionId}
      >{`Id: ${productInfo.productId}`}</AppText>
      <AppText style={styles.sectionProductName}>
        {productInfo.productName}
      </AppText>
      <View style={styles.sectionAmount}>
        <AppText>Wydajność na zmiane: </AppText>
        <AppText>{productInfo.amount}</AppText>
      </View>
      <AppText>Kontrola jakości:</AppText>
      <FlatList
        data={productInfo.productProperties}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, index }) => (
          <AppText style={styles.sectionProperty}>{`${index + 1}. ${
            item.content
          }`}</AppText>
        )}
      />
      <AppSeparator style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  sectionId: {
    fontSize: 20,
  },
  sectionProductName: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20
  },
  sectionAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20
  },
  sectionProperty: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
  },
});

export default ProductCard;
