import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// Dummy screens for demonstration
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ManualControlScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Manual Control Screen</Text>
    </View>
  );
}

// WeatherScreen component
function WeatherScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerBackground} />
          <Text style={styles.headerText}>Weather Monitoring</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// NavigationBar component
const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "home" | "cloud" | "build" = "home"; // Assign default value

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Weather") {
            iconName = "cloud";
          } else if (route.name === "Manual Control") {
            iconName = "build";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
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

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // ScrollView content
  scrollViewContent: {
    flexGrow: 1,
  },

  // Header section
  header: {
    height: 268,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0FDBFA",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFEFE",
    textAlign: "center",
    lineHeight: 30,
  },

  // Screen container
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
