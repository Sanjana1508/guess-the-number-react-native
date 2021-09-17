import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
});

export default styles;
