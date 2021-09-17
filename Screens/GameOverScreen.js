import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import TitleText from "../components/atoms/title/TitleText";
import BodyText from "../components/atoms/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/atoms/button/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYv_vqGxl8m53wMX4MlHXNWlfWZtWWBFn2-w&usqp=CAU",
            // }}
            style={styles.image}
          />
        </View>
        <BodyText style={styles.resultText}>
          Needed <Text style={styles.highlight}>{props.roundsNumber}</Text>{" "}
          rounds to guess the Number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
});

export default GameOverScreen;
