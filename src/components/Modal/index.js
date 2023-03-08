import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  View,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import {
  selectStory,
  storyWatched,
  setIndex,
} from "../../redux/Slices/storySlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CommentInput from "../CommentInput";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

const StoryModal = ({ route }) => {
  const { index } = route.params;
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storyPhoto = useSelector(selectStory);
  const [imageIndex, setImageIndex] = useState(index);
  let interval = null;

  const play = () => {
    interval = setInterval(() => {
      moveForward();
    }, 3000);
  };

  const stop = () => {
    clearInterval(interval);
  };
  const togglePlay = () => {
    if (interval) {
      stop();
    } else {
      play();
    }
  };

  const closeModal = () => {
    navigation.goBack();
  };

  const moveForward = () => {
    dispatch(
      storyWatched({ storyId: storyPhoto.userStory.story[imageIndex].id })
    );
    if (imageIndex === storyPhoto.userStory.story.length - 1) {
      closeModal();
      return;
    }
    dispatch(setIndex(imageIndex + 1));
    setImageIndex((prevCount) => prevCount + 1);
  };

  const moveBack = () => {
    if (imageIndex <= 0) return;
    dispatch(setIndex(imageIndex - 1));
    setImageIndex((prevCount) => prevCount - 1);
  };
  useEffect(() => {
    play();
    return stop;
  }, [imageIndex]);

  const ProgressView = () => {
    const progressAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(progressAnim, {
        toValue: (width - 40) / storyPhoto.userStory.story.length,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    }, [progressAnim]);
    return (
      <Animated.Text
        style={{ backgroundColor: "#FFCC00", width: progressAnim }}
      ></Animated.Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusTabContainer}>
        {storyPhoto.userStory.story.map((item, index) => (
          <View
            key={index}
            style={[
              styles.statusTab,

              {
                marginHorizontal: 2,
                backgroundColor: index < imageIndex ? "#FFCC00" : "white",
              },
            ]}
          >
            {index === imageIndex && <ProgressView />}
          </View>
        ))}
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: storyPhoto.userStory.story[imageIndex].image }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <View style={styles.overlay}>
          <Image
            style={styles.userImage}
            source={{ uri: storyPhoto.userStory.userImage }}
          />
          <Text style={styles.userName}>{storyPhoto.userStory.userName}</Text>
          <Text style={styles.time}>{storyPhoto.userStory.time}</Text>
          <View style={styles.rightOverlay}>
            <Entypo
              style={styles.threeDot}
              name="dots-three-horizontal"
              size={18}
              color="white"
            />
            <Pressable onPress={closeModal}>
              <AntDesign
                style={styles.closeModal}
                name="close"
                size={18}
                color="white"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.rightLeftController}>
        <Pressable onPress={moveBack} style={styles.controller}></Pressable>
        <Pressable onPress={togglePlay} style={styles.controller}></Pressable>
        <Pressable onPress={moveForward} style={styles.controller}></Pressable>
      </View>
      <View style={styles.commentInput}>
        <CommentInput />
        <View style={styles.commentLogo}>
          <AntDesign
            style={styles.heartLogo}
            name="hearto"
            size={20}
            color="white"
          />
          <Feather
            style={styles.sendLogo}
            name="send"
            size={20}
            color="white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryModal;
