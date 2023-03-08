import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inlineContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: "flex-start",
  },
  userName: {
    marginHorizontal: 10,
    marginLeft: 40,
  },
});

export default styles;
