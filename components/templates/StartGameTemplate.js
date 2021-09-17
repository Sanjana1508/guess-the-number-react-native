import React from "react";
import Header from "../molecules/Header";
import Card from "../molecules/Card";

import { View, StyleSheet } from "react-native";

const StartGameTemplate = (props) => {
  return (
    <View>
      <Card style={styles.card} onStartGame={props.onStartGame}></Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    // maxWidth: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
});

export default StartGameTemplate;
