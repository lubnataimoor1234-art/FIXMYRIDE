import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Rides = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚗 Rides Screen</Text>
    </View>
  );
};

export default Rides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
