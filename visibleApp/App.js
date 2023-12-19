import React from "react";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../visibleApp/Screens/LoginScreen";
import SignUpScreen from "../visibleApp/Screens/signupScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";



//Data
async function postData(url, obj) {
  try {
    const response = await axios.post(url, obj);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
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
            title: "Visible App",
            headerStyle: styles.headerStyle,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitleStyle,
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
  headerStyle: {
    backgroundColor: "black",
    shadowColor: "#000",
    borderBottomColor: "#2c3e50",
    borderBottomWidth: 0.5,
    height: 90,
  },

  headerTitleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  
});

export default App;
