import React from "react";
import { TextInput } from "react-native";
import styles from "./style.js";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;
