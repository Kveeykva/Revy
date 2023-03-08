import React from "react";
import { View, Image } from "react-native";
import ProfilePhoto from "../../../utilts/renvyPP.png";
import styles from "./styles";

const UserProfilePhoto = () => {
  return (
    <View>
      <Image source={ProfilePhoto} style={styles.image} />
    </View>
  );
};
export default UserProfilePhoto;
