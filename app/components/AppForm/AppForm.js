import React from "react";
import { StyleSheet, View } from "react-native";

const AppForm = ({children}) => {
    return <View style={styles.container}>
        {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        width: "60%",
    }
})

export default AppForm;