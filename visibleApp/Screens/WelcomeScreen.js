import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import VisibleImage from "../Designer.png";
import { useFonts, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';

// Welcome Screen
const WelcomeScreen = ({ navigation }) => {
  
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
      ? "rgba(117, 117, 117, 0.95)"
      : "rgba(25, 118, 210, 99)",
  };

  const signUpButtonStyle = {
    ...styles.welcomeButtonContainer,
    backgroundColor: isSignUpPressed
      ? "rgba(117, 117, 117, 0.95)"
      : "rgba(25, 118, 210, 99)",
  };

  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,Inter_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={VisibleImage} style={styles.visibleImage} />
        <Text style={styles.textVisible}>{"Visible"}</Text>
      </View>

      <View style={styles.welcomeContainer}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#263238",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '20%',
  },
  visibleImage: {
    width: 175,
    height: 175,
  },

  welcomeContainer: {
    flex: 2,
    alignItems: "center",
    width: "80%",
    marginHorizontal: "20%",
  },
  welcomeButtonContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    width: "70%",
    shadowColor: "white",
    shadowRadius: 3,
    shadowOffset: { width: 4, height: 2 },
  },
  textWelcome: {
    fontSize: 25,
    lineHeight: 26,
    letterSpacing: 0.8,
    color: "white",
    fontFamily: "Inter_600SemiBold"
  },
  textVisible: {
    margin: 5,
    fontSize: 35,
    lineHeight: 35,
    letterSpacing: 0.7,
    color: "white",
    fontFamily: "Inter_700Bold"
  },
});
export default WelcomeScreen;
