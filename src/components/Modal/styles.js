import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  statusTabContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  statusTab: {
    height: 2,
    flex: 1,
  },
  userName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 500,
    alignSelf: "center",
    marginLeft: 12,
  },
  time: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 500,
    alignSelf: "center",
    marginLeft: 8,
  },
  imageContainer: {
    backgroundColor: colors.black,
    marginTop: 5,
  },
  imageStyle: {
    width: "100%",
    height: "94%",
  },
  overlay: {
    position: "absolute",
    flexDirection: "row",
    marginTop: 8,
    width: "100%",
  },
  rightOverlay: {
    width: "100%",
    flexDirection: "row",
    marginTop: 8,
    position: "absolute",
    justifyContent: "flex-end",
  },
  threeDot: {
    marginRight: 12,
    alignSelf: "center",
  },
  closeModal: {
    marginRight: 10,
    alignSelf: "center",
  },
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 12,
  },
  controller: {
    flex: 1,
  },

  rightLeftController: {
    position: "absolute",
    width: "100%",
    height: "85%",
    flexDirection: "row",
    bottom: 0,
  },
  commentInput: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginVertical: 20,
  },
  commentLogo: {
    flexDirection: "row",
    right: 0,
    position: "absolute",
    alignSelf: "center",
  },
  heartLogo: {
    marginRight: 23,
  },
  sendLogo: {
    marginRight: 23,
  },
});

export default styles;
