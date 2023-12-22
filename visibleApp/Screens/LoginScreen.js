import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// Login Screen
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      // Perform signup logic with form data (e.g., make an API call)
      setIsLoading(true);
      const obj = { email, password };
      //REMOVE COMMENT!!-> //var postData = await postData(url, obj);
      console.log("Logging in:", obj);
      // Navigate to another screen after successful signup
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <Button
              title={isLoading ? "Logging In..." : "Login"}
              onPress={handleLogin}
              disabled={isLoading}
            />
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
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    paddingBottom: 4,
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  textInput: {
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: "white",
    borderWidth: 1.5,
    borderBottomColor: "white",
    borderTopColor: "#212121",
    borderRightColor: "#212121",
    borderLeftColor: "#212121",
    marginBottom: 20,
    padding: 6,
    backgroundColor: "#212121",
    width: "75%",
  },
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#212121",
    width: "100%",
    paddingLeft: "20%",
  },

  loginButton: {
    paddingVertical: 15,
    width: "75%",
  },
  contentscrollContainer: {
    flexGrow: 1,
  },
  scrollContainer: {
    width: "100%",
  },
});

export default LoginScreen;
