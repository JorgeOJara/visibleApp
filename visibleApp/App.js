import React from "react";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../visibleApp/Screens/LoginScreen";
import SignUpScreen from "../visibleApp/Screens/signupScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

import axios from 'axios';


async function postData(url, obj) {
  try {
    const response = await axios.post(url, obj);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error Data:", error.response.data);
      console.error("Error Status:", error.response.status);
      console.error("Error Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error Request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error Message:', error.message);
    }
    console.error("Error Config:", error.config);
    return null; // or you can return error message or status based on your app's needs
  }
}

// Stack Navigator
const Stack = createStackNavigator();

// App Component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "Visible",
            headerStyle: styles.welcomeHeaderStyle,
            headerTintColor: "white",
            headerTitleStyle: styles.welcomeTitleStyle,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerTintColor: "black", 
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerTintColor: "black",
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  welcomeHeaderStyle: {
    backgroundColor: "#01579B",
    shadowColor: "#000",
    borderBottomColor: "#2c3e50",
    borderBottomWidth: 0.5,
    height: 100,
  },
  welcomeTitleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

    

});

export default App;
