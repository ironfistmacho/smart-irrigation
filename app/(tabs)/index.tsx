import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { supabase } from './supabaseClient';  // Import your supabase client

// TypeScript interface for the component's state
interface AuthState {
  email: string;
  password: string;
}

export default function App() {
  const [state, setState] = useState<AuthState>({ email: '', password: '' });

  // Function to handle email registration
  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: state.email,
        password: state.password
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Success", "Check your email for confirmation");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  // Function to handle login
  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: state.email,
        password: state.password
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Success", "Logged in successfully!");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  // Update state
  const handleChange = (field: keyof AuthState, value: string) => {
    setState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Text style={styles.text}>{"10:00pm"}</Text>
        </View>

        <Text style={styles.text2}>{"Let’s Get Started"}</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={state.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={state.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.text3}>{"Register"}</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text3}>{"Login"}</Text>
        </TouchableOpacity>

        <Text style={styles.text5}>{"Already Registered? Log in"}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#D9D9D9",
    borderColor: "#000000",
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 19,
    paddingHorizontal: 29,
    marginBottom: 32,
    marginLeft: 25,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  text2: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 68,
  },
  text: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    marginRight: 4,
    flex: 1,
  },
  text3: {
    color: "#000000",
    fontSize: 20,
  },
  text5: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
