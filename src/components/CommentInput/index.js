import React from "react";
import { TextInput, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("screen");

const CommentInput = () => {
  const [comment, setComment] = React.useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        value={comment}
        onChangeText={setComment}
        placeholder={"Yorum yap"}
        style={styles.commentInput}
        placeholderTextColor={"#FFFFFF"}
        color={"#FFFFFF"}
      />
    </KeyboardAvoidingView>
  );
};
export default CommentInput;
