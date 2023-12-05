import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import backgroundImage from './annie-spratt-wuc-KEIBrdE-unsplash.jpg';

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
          </View>
          <View style={[styles.buttonWrapper, styles.secondButtonWrapper]}>
            <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

// Login Screen
function LoginScreen() {
  return (
    <View style={styles.center}>
      <Text>Login Screen</Text>
    </View>
  );
}

// Sign In Screen
function SignInScreen() {
  return (
    <View style={styles.center}>
      <Text>Sign In Screen</Text>
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
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '80%', // Set the width of the button area
    marginBottom: 15, // Space between buttons
  },
  secondButtonWrapper: {
    marginTop: 15, // Additional top margin for the second button
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;
