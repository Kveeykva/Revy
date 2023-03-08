import React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Verified from "../../../utilts/verified.png";
import UserProfilePhoto from "../../components/UserProfilePhoto";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { selectStory } from "../../redux/Slices/storySlice";

const UserProfile = () => {
  const navigation = useNavigation();
  const storyPhoto = useSelector(selectStory);

  const getCircleColor = () => {
    if (storyPhoto.userStory.story.every((story) => story.seen)) {
      return ["lightgrey", "grey", "lightgrey"];
    } else {
      return ["#bc2a8d", "#e95950", "#fccc63"];
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Pressable
          hitSlop={{ top: 50, bottom: 35, left: 50, right: 50 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" style={styles.backIcon} />
        </Pressable>
        <View style={styles.textView}>
          <Text style={styles.userNameText}>
            {storyPhoto.userStory.userName}
          </Text>
          <Image source={Verified} style={styles.verified} />
        </View>
      </View>
      <View style={styles.userContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Modal", {
              index: storyPhoto.userStory.currentIndex,
            })
          }
        >
          <LinearGradient
            colors={getCircleColor()}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0 }}
            style={styles.imageContainer}
          >
            <UserProfilePhoto />
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.followerContainer}>
          <View style={styles.followers}>
            <Text style={styles.followerText}>
              {storyPhoto.userStory.follower}
            </Text>
            <Text style={styles.followText}>
              {storyPhoto.userStory.followerText}
            </Text>
          </View>
          <View style={styles.following}>
            <Text style={styles.followerText}>
              {storyPhoto.userStory.followed}
            </Text>
            <Text style={styles.followText}>
              {storyPhoto.userStory.followedText}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserProfile;
