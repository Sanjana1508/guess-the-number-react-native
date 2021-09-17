import {
  View,
  StyleSheet,
  Text,
  Button,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import style from "./style";
import Colors from "../../constants/colors";
import Input from "../atoms/input/Input";
import NumberContainer from "../NumberContainer";
import BodyText from "../atoms/BodyText";
import MainButton from "../atoms/button/MainButton";

const Card = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Number is invalid!",
        "Number has to be in between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (isConfirmed) {
    confirmedOutput = (
      <View
        style={{
          ...style.inputContainer,
          ...props.style,
          ...styles.summaryContainer,
        }}
      >
        <BodyText>You selected:</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Start a Game!</BodyText>
      <View
        style={{
          ...style.inputContainer,
          ...props.style,
        }}
      >
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={{ width: buttonWidth }}>
            <Button
              title="RESET"
              onPress={resetInputHandler}
              color={Colors.accent}
            />
          </View>
          <View style={{ width: buttonWidth }}>
            <Button
              title="CONFIRM"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: 75,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // button: {
  //   //width: 90,
  //   //width: Dimensions.get("window").width / 4,

  // },
  summaryContainer: {
    marginTop: 20,
    height: 160,
    alignItems: "center",
    width: 200,
  },
});

export default Card;
