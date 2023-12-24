import React from "react";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';


///screens 
import LoginScreen from "../visibleApp/Screens/LoginScreen";
import SignUpScreen from "../visibleApp/Screens/signupScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
//// Ajax Tool
import axios from 'axios';


// Stack Navigator
const Stack = createStackNavigator();

// App Component
function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: styles.welcomeHeaderStyle,            
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerTintColor: "white",
            headerStyle: styles.loginHeaderStyle,
            headerTitleStyle: styles.loginTitleStyle,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerTintColor: "white",
            headerTitleStyle: styles.signupTitleStyle,
            headerStyle: styles.signupHeaderStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  welcomeHeaderStyle: {
    backgroundColor: "#1976D2",
    shadowColor: "#000",
    borderBottomColor: "#2c3e50",
    borderBottomWidth: 0.5,
    height: 31,
  },
  loginHeaderStyle: {
    backgroundColor: "#1976D2",
    height: 90,
  },
  loginTitleStyle: {
    fontSize: 30,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    textShadowColor: "rgba(21, 21, 21, 0.25)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
  },
  signupHeaderStyle: {
    backgroundColor: "#1976D2",
    shadowColor: "#000",
    borderBottomColor: "#2c3e50",
    borderBottomWidth: 0.5,
    height: 90,
  },
  signupTitleStyle: {
    fontSize: 30,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    textShadowColor: "rgba(21, 21, 21, 0.25)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
  },

});

export default App;
