import React, { PureComponent } from "react";
import { useState } from "react/cjs/react.development";

import AppScreen from "../../components/AppScreen/AppScreen";
import ProductCard from "./ProductCard";
import axiosInstance from "../../utilities/axiosInstance";
import httpErrorHandler from "../../utilities/httpErrorHandler";
import systemConfiguration from "../../configuration/systemConfiguration";
import { FlatList, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

const ProductsScreen = ({}) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  const getProductsRequest = () => {
    axiosInstance
      .get(`/product-efficiencies/lines/${systemConfiguration.lineName.value}`)
      .then((response) => {
          setProducts(response.data);
      })
      .catch((error) => {
        httpErrorHandler(error);
      })
      .finally(() => {
        setDataLoaded(true);
      });
  };

  useState(() => {
    //TODO: remove it after testing
    setTimeout(() => {
      getProductsRequest();
      console.log("Changed")
    }, 1000);
  }, []);

  
  return (
    <AppScreen title="Produkty" dataLoaded={dataLoaded}>
        <FlatList
        data={products}
        keyExtractor={(item, index)=>`${item.id}-${index}`}
        renderItem={({item})=><ProductCard productInfo={item} />}
         />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
});

export default ProductsScreen;
