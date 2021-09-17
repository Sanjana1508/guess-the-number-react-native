import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import TitleText from "../atoms/title/TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={{ ...styles.title, ...props.style }}>
        {props.title}
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerIOS: {
    color: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title: {
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});
export default Header;
