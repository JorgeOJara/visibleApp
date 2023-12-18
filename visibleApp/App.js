import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import backgroundImage from "./annie-spratt-wuc-KEIBrdE-unsplash.png";
import LoginScreen from '../visibleApp/Screens/LoginScreen'; // Adjust the path accordingly

// Welcome Screen
function WelcomeScreen({ navigation }) {
  const [isLoginPressed, setLoginPressed] = useState(false);
  const [isSignUpPressed, setSignUpPressed] = useState(false);

  const loginPressIn = () => {
    setLoginPressed(true);
  };

  const loginPressOut = () => {
    setLoginPressed(false);
  };

  const signupPressIn = () => {
    setSignUpPressed(true);
  };

  const signupPressOut = () => {
    setSignUpPressed(false);
  };

  const loginButtonStyle = {
    ...styles.welcomeButtonContainer,
    backgroundColor: isLoginPressed
      ? "rgba(67,70,75, 0.95)"
      : "rgba(0, 0, 0, 0.90)",
  };

  const signUpButtonStyle = {
    ...styles.welcomeButtonContainer,
    backgroundColor: isSignUpPressed
      ? "rgba(67,70,75, 0.95)"
      : "rgba(0, 0, 0, 0.90)",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={loginButtonStyle}
            onPress={() => navigation.navigate("Login")}
            onPressIn={loginPressIn}
            onPressOut={loginPressOut}
          >
            <Text style={styles.textWelcome}>{"Log In"}</Text>
          </Pressable>
          <Pressable
            style={signUpButtonStyle}
            onPress={() => navigation.navigate("SignUp")}
            onPressIn={signupPressIn}
            onPressOut={signupPressOut}
          >
            <Text style={styles.textWelcome}>{"Sign Up"}</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

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

// Sign Up Screen
function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      // Perform signup logic with form data (e.g., make an API call)
      setIsLoading(true);
      const obj = { firstName, lastName, email, password };

      //REMOVE COMMENT!!-> var postData = await postData(url, obj);

      console.log("Signing up:", obj);
      // Navigate to another screen after successful signup
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError("Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textLogin}>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.textLogin}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.textLogin}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.textLogin}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.signUpButton}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Button
            title={isLoading ? "Signing Up..." : "Sign Up"}
            onPress={handleLogin}
            disabled={isLoading}
          />
        </View>
      </View>
    </View>
  );
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
            title: "Visible App", // Set the title of the header
            headerStyle: styles.headerStyle,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: "Login", // Set the title of the header
            headerTintColor: "black",
            headerTitleStyle: styles.headerTitleStyle,

          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            title: "Sign Up", // Set the title of the header
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "black",
    width: "100%",
    paddingLeft: "20%",
  },
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

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingVertical: 15,
    width: "80%",
    marginLeft: "20%",
  },

  signUpButton: {
    paddingVertical: 15,
    width: "75%",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textWelcome: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
  textLogin: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    paddingBottom: 4,
    textShadowColor: "rgba(240, 243, 244, 0.13)", // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow radius
  },

  textInput: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: "black",
    borderWidth: 0.5,
    borderColor: "white",
    marginBottom: 20,
    padding: 6,
    backgroundColor: "white",
    width: "75%",
  },

  welcomeButtonContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
    width: "70%",
    shadowColor: "white",
    shadowRadius: 3,
    shadowOffset: { width: 4, height: 2 },
  },
});

export default App;
