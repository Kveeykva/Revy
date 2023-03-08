import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import UserProfilePhoto from "../../components/UserProfilePhoto";
import { useSelector } from "react-redux";
import { selectStory } from "../../redux/Slices/storySlice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(selectStory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inlineContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
          <View style={styles.imageContainer}>
            <UserProfilePhoto />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
