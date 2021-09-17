import React from "react";
import StartGameTemplate from "../components/templates/StartGameTemplate";
import { ScrollView, KeyboardAvoidingView } from "react-native";

const StartGame = (props) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView behaviour="padding" keyboardVerticalOffset={30}>
        <StartGameTemplate onStartGame={props.onStartGame}></StartGameTemplate>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default StartGame;
