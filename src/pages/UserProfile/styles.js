import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginTop: 10,
  },
  backIcon: {
    fontSize: 22,
    color: colors.text,
  },
  userNameText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 600,
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  verified: {
    width: 10,
    height: 10,
    marginLeft: 5,
    alignItems: "center",
    marginTop: 2,
  },
  userContainer: {
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: {
    padding: 2.5,
    borderRadius: 50,
  },
  followerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  followers: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 60,
  },
  following: {
    flexDirection: "column",
    alignItems: "center",
  },
  followerText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 600,
  },
  followText: {
    fontSize: 13,
    color: colors.text,
    fontWeight: 400,
  },
});

export default styles;
