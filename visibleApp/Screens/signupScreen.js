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

// Sign Up Screen
const SignUpScreen = ({ navigation }) => {
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
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentscrollContainer}
        keyboardDismissMode="on-drag"
      >
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
          <View style={styles.signupButton}>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <Button
              title={isLoading ? "Signing Up..." : "Sign Up"}
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
    backgroundColor: "#01579B",
    width: "100%",
    paddingLeft: "20%",
  },

  signupButton: {
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

export default SignUpScreen;
