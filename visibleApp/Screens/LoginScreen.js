import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
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
    <View style={styles.container}>
      <ScrollView>
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
          <View style={styles.Button}>
            {error ? <Text>{error}</Text> : null}
            <Button
              title={isLoading ? "Logging In..." : "Login"}
              onPress={handleLogin}
              disabled={isLoading}
            />
          </View>
        </View>
      </ScrollView>
    </View>
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
  textLogin: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
    paddingBottom: 4,
    textShadowColor: "rgba(240, 243, 244, 0.13)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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

  loginButton: {
    paddingVertical: 15,
    width: "75%",
  },
});

export default LoginScreen;
