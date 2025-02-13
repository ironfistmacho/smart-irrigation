import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationBar from "@/app/(tabs)/NavigationBar";

export default function ManualControlScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerBackground} />
          <Text style={styles.headerText}>Manual Control</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    backgroundColor: "#0FDBFA", // You can change this color to match the theme of manual control
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFEFE",
    textAlign: "center",
    lineHeight: 30,
  },
});
