import React, { useState } from "react";
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Pressable
} from "react-native";
import { useFonts, Inter_700Bold, Inter_500Medium} from '@expo-google-fonts/inter';


// Login Screen
const LoginScreen = () => {
  const [isLoginPressed, setLoginPressed] = useState(false);
  const loginPressIn = () => {
    setLoginPressed(true);
  };
  const loginPressOut = () => {
    setLoginPressed(false);
  };

  const loginButtonStyle = {
    ...styles.welcomeButtonContainer,
    backgroundColor: isLoginPressed
      ? "rgba(117, 117, 117, 0.95)"
      : "rgba(25, 118, 210, 99)",
  };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      // Perform signup logic with form data (e.g., make an API call)
      setIsLoading(true);
      const obj = {email, password };

      var data = await postData("http://174.138.62.28:3000/login",obj);

      console.log("Logging In:", obj, data);
      // Navigate to another screen after successful signup
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError("Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold, Inter_500Medium
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentscrollContainer}
        keyboardDismissMode="on-drag"
      >
        <View style={styles.formContainer}>
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
          <View style={styles.loginButton}>
            {error ? <Text>{error}</Text> : null}
            
            <Pressable
              title={isLoading ? "Logging In..." : "Login"}
              style={loginButtonStyle}
              onPress={handleLogin}
              onPressIn={loginPressIn}
              onPressOut={loginPressOut}
              disabled={isLoading}
            >
              <Text style={styles.textButton}>{"Submit"}</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textLogin: {
    fontSize: 22,
    fontFamily: "Inter_500Medium",
    lineHeight: 22,
    letterSpacing: 0.5,
    color: "white",
    paddingBottom: 4,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },

  textInput: {
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: "white",
    borderWidth: 1,
    borderBottomColor: "white",
    borderTopColor: "#263238",
    borderRightColor: "#263238",
    borderLeftColor: "#263238",
    marginBottom: 20,
    padding: 6,
    backgroundColor: "#263238",
    width: "75%",
  },
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#263238",
    width: "100%",
    paddingLeft: "20%",
  },

  loginButton: {
    paddingVertical: 35,
    width: "95%",

  },
  contentscrollContainer: {
    flexGrow: 1,
  },
  scrollContainer: {
    width: "100%",
  },
  welcomeButtonContainer: {
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: "80%",
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },

  textButton: {
    fontSize: 23,
    fontFamily: "Inter_700Bold",
    lineHeight: 25,
    letterSpacing: 0.5,
    color: "white",
  },

});

export default LoginScreen;
