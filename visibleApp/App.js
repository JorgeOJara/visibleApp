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
  welcomeTitleStyle: {
    fontSize: 25,
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontFamily:"Inter_600SemiBold"
  },

  loginHeaderStyle: {
    backgroundColor: "#1976D2",
    shadowColor: "#000",
    borderBottomColor: "#2c3e50",
    borderBottomWidth: 0.5,
    height: 80,
  },
  loginTitleStyle: {
    fontSize: 30,
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

});

export default App;
