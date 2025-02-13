import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Image, StyleSheet } from "react-native";
import HomeScreen from "../(auth)/home";
import WeatherScreen from "../(auth)/Monitor";
import ManualControlScreen from "../(auth)/Manualcontrol";

// Import PNG icons
const HomeIcon = require("./assets/icons/home.png");
const WeatherIcon = require("./assets/icons/sun.png");
const ManualIcon = require("./assets/icons/settings.png");

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = HomeIcon;
          } else if (route.name === "Weather") {
            iconSource = WeatherIcon;
          } else if (route.name === "Manual Control") {
            iconSource = ManualIcon;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                { tintColor: color, width: size, height: size },
              ]}
            />
          );
        },
        tabBarActiveTintColor: "#00E5FF",
        tabBarInactiveTintColor: "#666",
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === "Home") {
            label = "Home";
          } else if (route.name === "Weather") {
            label = "Weather";
          } else if (route.name === "Manual Control") {
            label = "Manual";
          }

          return (
            <Text style={{ color, fontSize: 12, marginBottom: 3 }}>{label}</Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Manual Control" component={ManualControlScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    resizeMode: "contain",
  },
});