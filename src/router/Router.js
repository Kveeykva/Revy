import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/Home";
import NotificationsScreen from "../pages/Notifications";
import ProfileScreen from "../pages/Profile";
import ReelsScreen from "../pages/Reels";
import SearchScreen from "../pages/Search";
import UserProfile from "../pages/UserProfile";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import StoriesModal from "../components/Modal";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Reels" component={ReelsScreen} />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Modal" component={StoriesModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ animation: "slide_from_right" }}
      />
    </HomeStack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Reels") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={22} color={colors.black} />;
        },

        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="HomeTab"
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Notification" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default Router;
