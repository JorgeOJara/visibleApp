import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import backgroundImage from "../annie-spratt-wuc-KEIBrdE-unsplash.png";


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
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      welcomeContainer: {
        paddingVertical: 15,
        width: "80%",
        marginLeft: "20%",
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
      textWelcome: {
        fontSize: 20,
        lineHeight: 22,
        fontWeight: "bold",
        letterSpacing: 0.5, 
        color: "white",
      },
});
export default WelcomeScreen;