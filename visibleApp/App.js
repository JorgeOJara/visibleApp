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

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.welcomeButtonContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text}>{"Log In"}</Text>
          </Pressable>
          <Pressable
            style={styles.welcomeButtonContainer}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.text}>{"Sign Up"}</Text>
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

// Login Screen
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      // Perform signup logic with form data (e.g., make an API call)
      setIsLoading(true);
      const obj = {email, password };
      //var postData = await postData(url, obj);
      
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
      <View style={styles.formContainer}>
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.signUpButton}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Button
            title={isLoading ? "Logging In..." : "Login"}
            onPress={handleLogin}
            disabled={isLoading}
          />
        </View>
        
      </View>
    </View>
  );
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
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
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
              title: 'Visible App', // Set the title of the header
              headerStyle: styles.headerStyle,
              headerTintColor: 'white',
              headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
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
    backgroundColor: 'black',
    shadowColor: '#000',
    borderBottomColor: '#2c3e50',
    borderBottomWidth: 0.5,
    height: 90,
  },

  headerTitleStyle: {
    fontSize: 25, // Set the font size of the header text
    fontWeight: 'bold', // You can also set the font weight if needed
    textShadowColor: 'rgba(240, 243, 244, 0.13)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
      textShadowRadius: 5, // Shadow radius
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: "black",
    borderWidth: 0.5,
    borderColor: "white",
    marginBottom: 25,
    padding: 8,
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
    shadowRadius: 2,
  },

  
  
});

export default App;
